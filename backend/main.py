from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost:5173"  # Replace with your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class UserParams(BaseModel):
    weight: float
    height: float
    riding_style: str

@app.post("/calculate")
async def calculate(params: UserParams):
    if params.weight <= 0 or params.height <= 0:
        raise HTTPException(status_code=400, detail="Вес и рост должны быть больше 0")
    if params.riding_style not in ["freeride", "freestyle", "carving"]:
        raise HTTPException(status_code=400, detail="Недопустимый тип катания")

    board_length = params.height * 0.88

    if params.weight > 80:
        board_length += 5
    elif params.weight < 60:
        board_length -= 5

    if params.riding_style == "freestyle":
        board_length -= 3 
    elif params.riding_style == "freeride":
        board_length += 3

    return {"board_length": round(board_length, 1)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
