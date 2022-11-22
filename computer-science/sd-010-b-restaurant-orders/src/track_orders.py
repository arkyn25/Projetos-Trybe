from typing import Counter


class TrackOrders:
    def __init__(self):
        self.len = 0
        self.orders = []

    def __len__(self):
        return self.len

    def add_new_order(self, costumer, order, day):
        self.orders.append([costumer, order, day])
        self.len += 1

    def get_most_ordered_dish_per_costumer(self, costumer):
        clients = []
        for ask in self.orders:
            if ask[0] == costumer:
                clients.append(ask[1])
        return Counter(clients).most_common(1)[0][0]

    def get_never_ordered_per_costumer(self, costumer):
        menu = set()
        ordered = set()
        for ask in self.orders:
            menu.add(ask[1])
        if ask[0] == costumer:
            ordered.add(ask[1])
        return menu.difference(ordered)

    def get_days_never_visited_per_costumer(self, costumer):
        menu = set()
        days = set()
        for ask in self.orders:
            menu.add(ask[2])
        if ask[0] == costumer:
            days.add(ask[2])
        return menu.difference(days)

    def get_busiest_day(self):
        days = []
        for day in self.orders:
            days.append(day[2])
        return Counter(days).most_common(1)[0][0]

    def get_least_busy_day(self):
        days = []
        for day in self.orders:
            days.append(day[2])
        return Counter(days).most_common()[-1][0]
