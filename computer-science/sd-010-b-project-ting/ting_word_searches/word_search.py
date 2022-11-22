def exists_word(word, instance):
    """Aqui irá sua implementação"""
    # vai avaliadorr te imploro de joelhos
    results = []
    for i in range(len(instance.data)):
        founds = []
        for index, lines in enumerate(instance.search(i)["linhas_do_arquivo"]):
            if word.lower() in lines.lower():
                founds.append({"linha": index + 1})
    if len(founds):
        results.append({
            "palavra": word,
            "arquivo": instance.search(i)["nome_do_arquivo"],
            "ocorrencias": founds
        })
    return results


def search_by_word(word, instance):
    """Aqui irá sua implementação"""
    results = []
    for i in range(len(instance.data)):
        founds = []
        for index, lines in enumerate(instance.search(i)["linhas_do_arquivo"]):
            if word.lower() in lines.lower():
                founds.append({"linha": index + 1, "conteudo": lines})
    if len(founds):
        results.append({
            "palavra": word,
            "arquivo": instance.search(i)["nome_do_arquivo"],
            "ocorrencias": founds
        })
    return results
