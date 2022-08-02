import datetime
from sqlalchemy import Column, String, Integer, DateTime, ARRAY, ForeignKey, Table
from sqlalchemy.orm import relationship
from handler import Base

association_table = Table(
    "association",
    Base.metadata,
    Column("student_id", ForeignKey("student.id"), primary_key=True),
    Column("project_id", ForeignKey("project.id"), primary_key=True),
)

class Students(Base):
    __tablename__ = "student"
    id = Column(Integer, primary_key=True, autoincrement=True)
    user = Column(String[25], unique=True, nullable=False, index=True)
    password = Column(String[25], unique=True, nullable=False, index=True)
    icon = Column(String[255], nullable=True, index=True)
    banner = Column(String[255], nullable=True, index=True)
    created_date = Column(DateTime, default=datetime.datetime.utcnow, autoincrement=True, index=True, nullable=False)
    description = Column(String, index=True, nullable=True)
    habilities = Column(String, index=True, nullable=True)
    formation = Column(String, index=True, nullable=True)

    stundents = relationship("Projects", secondary=association_table, back_populates="students")


class Projects(Base):
    __tablename__ = "project"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String[55], unique=True, nullable=False, index=True)
    description = Column(String, index=True, nullable=True)
    created_date = Column(DateTime, default=datetime.datetime.utcnow, autoincrement=True, index=True, nullable=False)
    images = Column(String, nullable=True, index=True)
    advisors = Column(String[255], nullable=True, index=True)
    segment = Column(String[25], nullable=False, index=True)

    students = relationship(
        "Students", secondary=association_table, back_populates="projects"
    )