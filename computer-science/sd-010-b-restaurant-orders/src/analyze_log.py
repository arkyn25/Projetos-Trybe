import csv
from typing import Counter
import os


def test_path(path):
    # https://linuxize.com/post/python-check-if-file-exists/
    if not path.endswith('.csv') or not os.path.exists(path):
        raise FileNotFoundError("File not found")


def read(path):
    with open(path) as file:
        result = csv.reader(file, delimiter=',')
        return [rows for rows in result]


def most_ordered(client, path):
    requests = read(path)
    results = []
    for orders in requests:
        if orders[0] == client:
            results.append(orders[1])
    # https://www.kite.com/python/docs/collections.Counter.most_common
    return Counter(results).most_common(1)[0][0]


def ask_hamburguer(client, path):
    requests = read(path)
    count = 0
    for ask in requests:
        if (ask[0] == client) and (ask[1] == 'hamburguer'):
            count += 1
    return count


def never_ask(client, path):
    requests = read(path)
    menu = set()
    ordered = set()
    for ask in requests:
        menu.add(ask[1])
        if ask[0] == client:
            ordered.add(ask[1])
    return menu.difference(ordered)


def never_went(client, path):
    requests = read(path)
    menu = set()
    days = set()
    for ask in requests:
        menu.add(ask[2])
        if ask[0] == client:
            days.add(ask[2])
    return menu.difference(days)


def analyze_log(path_to_file):

    maria_most_ordered = most_ordered('maria', path_to_file)

    arnaldo_ask_hamburguer = ask_hamburguer('arnaldo', path_to_file)

    joao_never_ask = never_ask('joao', path_to_file)

    day_joao_never_came = never_went('joao', path_to_file)
    test_path(path_to_file)
    file = open('data/mkt_campaign.txt', 'w')

    file.writelines('{}\n{}\n{}\n{}\n'.format(
        maria_most_ordered,
        arnaldo_ask_hamburguer,
        joao_never_ask,
        day_joao_never_came
    ))
