def is_anagram(first_string, second_string):
    """ Faça o código aqui. """
    if len(first_string) != len(second_string):
        return False

    return selection_sort(first_string) == selection_sort(second_string)


def selection_sort(array):
    # como um algoritmo de força bruta
    # percorre a estrutura exaustivamente
    words = list(array)
    for i in range(len(words)):
        minimum = i

        for j in range(i + 1, len(words)):
            if (words[j] < words[minimum]):
                minimum = j

        words[minimum], words[i] = words[i], words[minimum]

    return words
