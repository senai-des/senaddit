from fastapi import status, HTTPException, Depends, APIRouter
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from api import models, schemas, db, settings_db

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

SECRET_KEY = settings_db.jwt_encode_key
ALGORITHM = settings_db.jwt_algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = 15

def accessToken(data: dict) -> str:
    encode = data.copy()
    expires = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    encode.update({"exp": expires})
    jwt_str = jwt.encode(encode, key=SECRET_KEY, algorithm=ALGORITHM)
    return jwt_str

def currentUser(token: str = Depends(oauth2_scheme), db: Session = Depends(db.get_db)) -> models.Projects:

    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Couldn't verify credentials", headers={"WWW-Authenticate": "Bearer"})
    token_data = checkaccessToken(token, credentials_exception)
    user = db.query(models.Students).filter_by(id=token_data.user_id).first()
    return user

def checkaccessToken(token: str, credential_exception: Exception) -> schemas.tokenVerifier:
    try:
        payload = jwt.decode(token, key=SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        raise credential_exception
    user_id = payload.get("user_id")
    if user_id is None:
        raise credential_exception
    return schemas.tokenVerifier(user_id=user_id)

def hashPassword(password: str):
    return pwd_context.hash(password)

def verifyPassword(password: str, hashed_password: str) -> bool:
    return pwd_context.verify(password, hashed_password)

@router.post("/login", response_model=schemas.token)
def userLogin(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(db.get_db)) -> schemas.token:
    user = db.query(models.Students).filter_by(email=user_credentials.username).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="invalid credentials")
    if not verifyPassword(password=user_credentials.password, hashed_password=user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="invalid credentials")
    access_token: str = accessToken(data={"user_id": user.id})
    token_res = schemas.Token(token=access_token, token_type="bearer")
    return token_res
