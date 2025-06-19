from db import SessionLocal, init_db
from models import BoardSize

table = {
    40: {140: 134, 180: 144},
    45: {145: 138, 180: 146},
    50: {150: 140, 185: 149},
    55: {150: 141, 185: 152},
    60: {150: 143, 185: 154},
    65: {155: 146, 185: 156},
    70: {155: 149, 185: 158},
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

def import_data():
    init_db()
    session = SessionLocal()
    for weight, heights in table.items():
        min_height = min(heights.keys())
        max_height = max(heights.keys())
        min_board_size = heights[min_height]
        max_board_size = heights[max_height]
        entry = BoardSize(
            weight=weight,
            min_height=min_height,
            min_board_size=min_board_size,
            max_height=max_height,
            max_board_size=max_board_size
        )
        session.merge(entry)
    session.commit()
    session.close()

if __name__ == "__main__":
    import_data()
    print("Data imported successfully")