from .simple_report import SimpleReport
from collections import Counter


class CompleteReport(SimpleReport):
    @classmethod
    def generate(cls, stock):
        all_report = SimpleReport.generate(stock)
        all_stock = all_stock_companies(stock)

        return f"{all_report}\nProdutos estocados por empresa: \n{all_stock}"


def all_stock_companies(stock):
    companies = []
    result = ""

    for company in stock:
        companies.append(company["nome_da_empresa"])

    quantity = Counter(companies)

    for k, v in quantity.items():
        result += f"- {k}: {v}\n"

    return result
