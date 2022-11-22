class Queue:
    def __init__(self):
        """Inicialize sua estrutura aqui"""
        # obg aula ao vivo
        self.data = []
        self.length = 0

    def __len__(self):
        """Aqui irá sua implementação"""
        return self.length

    def enqueue(self, value):
        """Aqui irá sua implementação"""
        self.data.append(value)
        self.length += 1

    def dequeue(self):
        """Aqui irá sua implementação"""
        self.length -= 1
        return self.data.pop(0)

    def search(self, index):
        """Aqui irá sua implementação"""
        if (index < 0) or (index >= self.length):
            raise IndexError
        return self.data[index]
