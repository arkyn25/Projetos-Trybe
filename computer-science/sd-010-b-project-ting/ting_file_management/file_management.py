import sys


def txt_importer(path_file):
    """Aqui irá sua implementação"""
    # https://stackoverflow.com/questions/5574702/how-to-print-to-stderr-in-python
    if not path_file.endswith('.txt'):
        return sys.stderr.write("Formato inválido\n")

    try:
        with open(path_file, "r") as file:
            result = [rows.strip("\n") for rows in file]
        return result
    except FileNotFoundError:
        return sys.stderr.write(
            f"Arquivo {path_file} não encontrado\n"
        )
