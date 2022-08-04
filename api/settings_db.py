from typing import Optional
from pydantic import BaseSettings


class Settings(BaseSettings):
    database_url: Optional[str] = None

    database: str = "sqlite"
    host: str = "localhost"
    port: str = "8000"
    db_name: str = "sqlite"
    db_user: str = "sqlite"
    db_password: str = "1234"

    jwt_encode_key: str
    jwt_algorithm: str

    class Config:
        env_file = ".venv"
        env_file_encoding = "utf-8"


settings = Settings()