def is_palindrome_recursive(word, low_index, high_index):
    """ Faça o código aqui. """
    if word == '':
        return False
    if low_index >= high_index:
        return True
    if word[low_index] == word[high_index]:
        return is_palindrome_recursive(word, (low_index + 1), (high_index - 1))
    return False


# word1 = "ANA"
# # saída: True
# word2 = "COXINHA"
# # saída: False
# print(is_palindrome_recursive(word1, 0, len(word1) -1))
# print(is_palindrome_recursive(word2, 0, len(word1) -1))
