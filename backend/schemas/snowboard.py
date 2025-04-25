from pydantic import BaseModel, Field
from typing import Dict

class SnowboardInput(BaseModel):
    height: int = Field(..., gt=0)
    weight: int = Field(..., gt=0)
    riding_style: str

class SnowboardOutput(BaseModel):
    recommended_length: float

class BindingsStanceInput(BaseModel):
    height: int
    heel_to_knee: int
    riding_style: str

class BindingsStanceOutput(BaseModel):
    angles: Dict[str, int]
    stance_width: int