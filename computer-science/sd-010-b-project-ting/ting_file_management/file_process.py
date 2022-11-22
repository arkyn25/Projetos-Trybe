import sys
from ting_file_management.file_management import txt_importer


def process(path_file, instance):
    """Aqui irá sua implementação"""
    # https://www.w3schools.com/python/ref_list_count.asp
    for index in range(len(instance.data)):
        if path_file == instance.search(index)['nome_do_arquivo']:
            return None

    text_result = txt_importer(path_file)

    result = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(text_result),
        "linhas_do_arquivo": text_result
    }
    # https://docs.python.org/3/library/sys.html
    sys.stdout.write(str(result))
    instance.enqueue(result)


def remove(instance):
    """Aqui irá sua implementação"""
    try:
        removed = instance.dequeue()
        sys.stdout.write(
            f"Arquivo {removed['nome_do_arquivo']} removido com sucesso\n"
        )
    except Exception:
        sys.stdout.write("Não há elementos\n")


def file_metadata(instance, position):
    """Aqui irá sua implementação"""
    try:
        sys.stdout.write(str(instance.search(position)))
    except IndexError:
        sys.stderr.write("Posição inválida\n")
