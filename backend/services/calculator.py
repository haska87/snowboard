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
    min_h = min(height_data.keys())
    max_h = max(height_data.keys())
    if height <= min_h:
        return height_data[min_h]
    if height >= max_h:
        return height_data[max_h]
    return height_data[min_h] + (height_data[max_h] - height_data[min_h]) / (max_h - min_h) * (height - min_h)

def get_board_size(weight, height):
    weights = sorted(table.keys())
    if weight <= weights[0]:
        return interpolate_height(height, table[weights[0]])
    if weight >= weights[-1]:
        return interpolate_height(height, table[weights[-1]])
    if weight in table:
        return interpolate_height(height, table[weight])
    lw = max(w for w in weights if w < weight)
    uw = min(w for w in weights if w > weight)
    low_size = interpolate_height(height, table[lw])
    up_size = interpolate_height(height, table[uw])
    return low_size + (up_size - low_size) / (uw - lw) * (weight - lw)

def calculate_bindings(data):
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
    return {"angles": angles, "stance_width": stance_width}