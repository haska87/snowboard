from schemas.snowboard import SnowboardInput, BindingsStanceInput, BindingsStanceOutput
from db import SessionLocal
from models import BoardSize

def load_board_size_table():
    session = SessionLocal()
    data = session.query(BoardSize).all()
    session.close()
    table = {}
    for row in data:
        table[row.weight] = {
            "min_height": row.min_height,
            "min_board_size": row.min_board_size,
            "max_height": row.max_height,
            "max_board_size": row.max_board_size
        }
    return table

BOARD_SIZE_TABLE = load_board_size_table()

WEIGHTS = sorted(BOARD_SIZE_TABLE.keys())

def get_board_size_from_cache(weight: int):
    return BOARD_SIZE_TABLE.get(weight)

MIN_OFFSET = 2.5
MAX_OFFSET = 5

STYLE_OFFSETS = {
    "beginner": -1.5,
    "freestyle": -1,
    "all-mountain": 0,
    "freeride": 1,
    "carving": 1.5
}

def style_offset(weight) -> float:
    if weight <= WEIGHTS[0]:
        return MIN_OFFSET
    if weight >= WEIGHTS[-1]:
        return MAX_OFFSET
    return MIN_OFFSET + (MAX_OFFSET - MIN_OFFSET) / (WEIGHTS[-1] - WEIGHTS[0]) * (weight - WEIGHTS[0])

def interpolate_height(height, height_data) -> float:
    min_h = min(height_data.keys())
    max_h = max(height_data.keys())
    if height <= min_h:
        return height_data[min_h]
    if height >= max_h:
        return height_data[max_h]
    return height_data[min_h] + (height_data[max_h] - height_data[min_h]) / (max_h - min_h) * (height - min_h)

def get_board_size(data: SnowboardInput) -> float:
    weight = data.weight
    height = data.height
    offset = style_offset(weight) * STYLE_OFFSETS.get(data.riding_style, 0)

    board_data = get_board_size_from_cache(weight)
    if board_data:
        min_h = board_data["min_height"]
        max_h = board_data["max_height"]
        min_size = board_data["min_board_size"]
        max_size = board_data["max_board_size"]

        if height <= min_h: # type: ignore
            return min_size + offset
        if height >= max_h: # type: ignore
            return max_size + offset
        interpolated = min_size + (max_size - min_size) / (max_h - min_h) * (height - min_h)
        return interpolated + offset

    lw = max((w for w in WEIGHTS if w < weight), default=WEIGHTS[0])
    uw = min((w for w in WEIGHTS if w > weight), default=WEIGHTS[-1])

    low_size = get_board_size_from_cache(lw)
    up_size = get_board_size_from_cache(uw)

    if low_size is None or up_size is None:
        raise ValueError("Нет данных для интерполяции по весу и росту")

    interpolated = low_size["min_board_size"] + (up_size["min_board_size"] - low_size["min_board_size"]) / (uw - lw) * (weight - lw)
    return interpolated + offset

def calculate_bindings(data: BindingsStanceInput) -> BindingsStanceOutput:
    if data.height <= 0 or data.heel_to_knee <= 0:
        raise ValueError("Все параметры должны быть больше 0")
    stance_width = data.heel_to_knee
    if data.riding_style in ["freestyle", "beginner"]:
        angles = {"front": 15, "back": -15}
        stance_width += 2
    elif data.riding_style == "freeride":
        angles = {"front": 21, "back": -9}
        stance_width -= 2
    else:
        angles = {"front": 18, "back": -9}
    return BindingsStanceOutput(angles=angles, stance_width=stance_width)