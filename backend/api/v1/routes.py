from fastapi import APIRouter, HTTPException
from schemas.snowboard import SnowboardInput, SnowboardOutput, BindingsStanceInput, BindingsStanceOutput
from services.calculator import get_board_size, calculate_bindings

router = APIRouter()

@router.post("/recommend", response_model=SnowboardOutput)
async def recommend_board(data: SnowboardInput):
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
    return SnowboardOutput(recommended_length=round(size, 1))

@router.post("/bindings", response_model=BindingsStanceOutput)
async def bindings_stance(data: BindingsStanceInput):
    try:
        return calculate_bindings(data)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))