from functools import lru_cache
import csv


@lru_cache
def read(path):
    return list(csv.DictReader(open(path)))
