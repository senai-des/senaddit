from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime

class newUser(BaseModel):
    email:EmailStr
    password:str

class userCheck(BaseModel):
    id:int
    email:EmailStr
    created_date:datetime

    class Config:
        orm_mode: True

class tokenVerifier(BaseModel):
    user_id: Optional[str] = None