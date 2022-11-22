from ..reports.simple_report import SimpleReport
from ..reports.complete_report import CompleteReport

import xml.etree.ElementTree as ET
import csv
import json


class Inventory:
    def csv_reader(path):
        result = []
        with open(path) as file:
            data = csv.DictReader(file)
            for row in data:
                result.append(row)
        return result

    def json_reader(path):
        with open(path) as file:
            content = file.read()
            data = json.loads(content)

        return data

    # https://www.datacamp.com/community/tutorials/python-xml-elementtree

    def xml_reader(path):
        result = []
        tree = ET.parse(path)
        root = tree.getroot()

        for item in root:
            dict_list = {}
            for row in item:
                dict_list[row.tag] = row.text
            result.append(dict_list)

        return result

    @classmethod
    def import_data(cls, path, type):
        report_type = {"simples": SimpleReport, "completo": CompleteReport}
        result = ""
# https://www.w3schools.com/python/ref_string_endswith.asp

        if path.endswith(".csv"):
            result = Inventory.csv_reader(path)
        elif path.endswith(".json"):
            result = Inventory.json_reader(path)
        elif path.endswith(".xml"):
            result = Inventory.xml_reader(path)

        return report_type[type].generate(result)
