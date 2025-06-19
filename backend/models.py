from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class BoardSize(Base):
    __tablename__ = "board_size_table"
    weight = Column(Integer, primary_key=True)
    min_height = Column(Integer, nullable=False)
    min_board_size = Column(Integer, nullable=False)
    max_height = Column(Integer, nullable=False)
    max_board_size = Column(Integer, nullable=False)