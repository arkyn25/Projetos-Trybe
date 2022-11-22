from .importer import Importer
from ..inventory.inventory import Inventory


class CsvImporter(Importer):
    def import_data(path):
        if not path.endswith("csv"):
            raise ValueError("Arquivo inválido")
        return Inventory.csv_reader(path)
