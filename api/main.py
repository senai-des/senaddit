import models 
from db import SessionLocal, engine
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title = "BOSCH/ETS Project Manager (Made by ApeView)",
    version = "0.0.1"
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
