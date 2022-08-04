import models 
from db import SessionLocal, engine
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routers import students, auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title = "Senaddit (Made by Miura)",
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

@app.get("/", tags=["Home"])
def home_page() -> dict:
    return {"Fala cria": "Apizinha do Sennadit :)"}

app.include_router(students.router, prefix="/students", tags=["Students"])
app.include_router(auth.router, tags=["Students"])