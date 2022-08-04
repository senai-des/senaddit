from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from routers import auth
import re
import db, models, schemas

router = APIRouter()
PASSWORD_REGEX = r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

@router.post("/signup", status_code=status.HTTP_201_CREATED, response_model=schemas.userCheck)
async def newUser(user:schemas.newUser, db: Session = Depends(db.get_db)) -> schemas.userCheck:
    if re.match(PASSWORD_REGEX, user.password) is None:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=f"Sua senha deve conter ao menos 8 caracteres, uma letra maiuscula, "f"uma letra minuscuka, um numero e um caracter especial")
    user.password = auth.hashPassword(user.password)
    existence = db.query(models.Students).filter(models.Students.email == user.email).first()
    if existence is not None:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"email ja registrado (email: {user.email})")
    new_user = models.Students(**dict(user))
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.get("/id/{id}", response_model=schemas.userCheck)
async def getUser(id: int, db: Session = Depends(db.get_db)) -> schemas.userCheck:
    user = db.query(models.Students).filter_by(id=id).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"aluno nao foi encontrado (id: {id})")
    return user