from datetime import datetime
from collections import Counter


class SimpleReport:
    @classmethod
    def generate(cls, stock):
        olderDate = oldest_date_stock(stock)
        validationDate = validation_date_stock(stock)
        stockCompany = biggest_stock_company(stock)

        return f"{olderDate}\n{validationDate}\n{stockCompany}\n"


def oldest_date_stock(stock):
    oldest_date = stock[0]["data_de_fabricacao"]

    for date in stock:
        if oldest_date > date["data_de_fabricacao"]:
            oldest_date = date["data_de_fabricacao"]

    return f"Data de fabricação mais antiga: {oldest_date}"


def validation_date_stock(stock):
    valid_date = stock[0]["data_de_validade"]
    date_time = str(datetime.now().date())

    for date in stock:
        if date["data_de_validade"] > date_time:
            if valid_date > date["data_de_validade"]:
                valid_date = date["data_de_validade"]

    return f"Data de validade mais próxima: {valid_date}"


def biggest_stock_company(stock):
    stocks = []
    message = "Empresa com maior quantidade de produtos estocados"
    for company in stock:
        stocks.append(company["nome_da_empresa"])

    return f"{message}: {max(Counter(stocks))}"
