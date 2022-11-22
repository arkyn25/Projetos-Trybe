def study_schedule(permanence_period, target_time):
    """ vqv. """
    result = 0
    if not target_time:
        return None
    for i, v in permanence_period:
        if type(i) != int or type(v) != int:
            return None
        if i <= target_time <= v:
            result += 1
    return result
