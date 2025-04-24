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

class BoardSizeInput(BaseModel):
    height: int
    weight: int
    riding_style: str

class BindingsStanceInput(BaseModel):
    height: int
    heel_to_knee: int
    riding_style: str

# {weight: {min_height: board_size, max_height: board_size}}
table = {
        40: {140: 134, 180: 144},
        45: {145: 138, 180: 146},
        50: {150: 140, 185: 149},
        55: {150: 141, 185: 152},
        60: {150: 143, 185: 154},
        65: {155: 146, 185: 156},
        70: {155: 148, 185: 157},
        75: {155: 151, 190: 161},
        80: {155: 152, 190: 163},
        85: {160: 155, 190: 164},
        90: {160: 156, 195: 165},
        95: {165: 157, 195: 166},
        100: {165: 158, 195: 165},
        105: {165: 159, 195: 167},
        110: {170: 161, 200: 170},
        115: {170: 162, 200: 171},
        120: {170: 163, 200: 172},
        125: {170: 164, 200: 173},
    }

def interpolate_height(height, height_data):
    min_height = min(height_data.keys())
    max_height = max(height_data.keys())
    
    if height <= min_height:
        return height_data[min_height]
    if height >= max_height:
        return height_data[max_height]
    
    board_size_min = height_data[min_height]
    board_size_max = height_data[max_height]
    return board_size_min + (board_size_max - board_size_min) / (max_height - min_height) * (height - min_height)

def get_board_size(weight, height):
    weights = sorted(table.keys())
    
    if weight <= weights[0]:
        return interpolate_height(height, table[weights[0]])
    if weight >= weights[-1]:
        return interpolate_height(height, table[weights[-1]])
    if weight in weights:
        return interpolate_height(height, table[weight])
    
    lower_weight = max(w for w in weights if w < weight)
    upper_weight = min(w for w in weights if w > weight)
    
    lower_board_size = interpolate_height(height, table[lower_weight])
    upper_board_size = interpolate_height(height, table[upper_weight])
    
    return lower_board_size + (upper_board_size - lower_board_size) / (upper_weight - lower_weight) * (weight - lower_weight)

@app.post("/calculate-board-size")
async def calculate_board_size(data: BoardSizeInput):
    if data.height <= 139 or data.weight <= 39:
        raise HTTPException(status_code=400, detail="Рост и вес должны быть больше 139 см и 39 кг соответственно")
    if data.height >= 211 or data.weight >= 151:
        raise HTTPException(status_code=400, detail="Рост и вес должны быть меньше 211 см и 151 кг соответственно")

    base_size = round(get_board_size(data.weight, data.height))
    if data.riding_style == "freestyle":
        size = base_size - 2
    elif data.riding_style == "freeride":
        size = base_size + 2
    else:
        size = base_size
    
    return {
        "board_length": round(size, 1),
        # "explanation": f"Рекомендуемый размер для {data.riding_style} катания."
    }

@app.post("/calculate-bindings-stance")
async def calculate_bindings_stance(data: BindingsStanceInput):
    if data.height <= 0 or data.heel_to_knee <= 0:
        raise HTTPException(status_code=400, detail="Все параметры должны быть больше 0")

    stance_width = data.heel_to_knee
    if data.riding_style == "freestyle" or data.riding_style == "beginner":
        angles = {"front": 15, "back": -15}
        stance_width = data.heel_to_knee + 2
    elif data.riding_style == "freeride":
        angles = {"front": 21, "back": -9}
        stance_width = data.heel_to_knee - 2
    else:
        angles = {"front": 18, "back": -9}
    
    return {
        "angles": angles,
        "stance_width": stance_width,
        # "explanation": f"Рекомендации для {data.riding_style} катания с учетом размера ботинка {data.boot_size}."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
