/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  if (!ids) return [];
  return animals.filter((animal) => ids.includes(animal.id));
  // Filtra o (animal) e verifica se ele entra na lista.
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

function animalsOlderThan(animal, age) {
  return animals.find((animais) => animais.name === animal)
    .residents.every((animais) => animais.age >= age);
  // retorna infos dos animais e busca o array do residents com todas as infos, assumindo que todos os objetos vao retornar.
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName));
  // se o employeeName for vazio retorna {},
  // retorna o primeiro funcionario com primeiro nome.
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}
// com destructuring consigo as infos de personalInfo e associatedWith
// trazendo os objetos no return usando spread criando um novo employee
// juntando as informacoes em um novo objeto.

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// uso return employees com .some onde verifico cada employee
// se tem manager tem id, se for true ele eh algum gerente.

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  return employees.push(createEmployee(personalInfo, associatedWith));
}

// destrutura employess
// cria um id, firstName, lastName, determina um padrao para nao voltar undefinided
// teste pede para que mannager se for vazio retorne = [] e responsibleFor = [] tbm
// aqui podemos reutilizar a funcao createEmployee e passra os paramentos personalInfo e associatedWith

function animalCount(species) {
  const result = animals.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (typeof species === 'string' && species.length !== 0) return result[species];
  return result;
}
// https://www.youtube.com/watch?v=D_MExaVe95w
// em animais, cada um tem um objeto com name, id, popularity, residents
// precisa inteirar animais e para cada objeto, retornar uma propriedade desse nome
// com length desse array residents.
// percorre o array animais faz um reduce, comeca com objeto vazio para cada animal
// pega o objeto acumulando e adiciona o name e length da quantidade de animais que tem nele
// o if faz uma checagem na hora de passar a specie, confirma se vai ser
// uma string, string no lugar de specie

function entryCalculator(entrants) {
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, key) => (
    acc + (entrants[key] * prices[key])
  ), 0);
}

// verficia o tipo de entrants se eh adult, child, or senior
// percorre cada chave do entrant, e cada chave coincide com seus prices
// determina o valor inicial como 0 e a chave atual do entrants
// apos determinar o numero de entrants, verifica o preco e mutiplica um pelo outro e add no acumulador
// obs: prices esta destruturado

function findAnimalNames(animalName, sorted, sex) {
  let result = animals.find((animal) => animal.name === animalName);
  result = result.residents;

  if (typeof sex === 'string') {
    result = result.filter((animal) => animal.sex === sex);
  }
  result = result.map((resident) => resident.name);
  if (sorted) result.sort();
  return { [animalName]: result };
}

function animalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;

  let result = animals.reduce((acc, animal) => {
    const { name, location } = animal;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(name);
    return acc;
  }, {});

  if (includeNames) {
    result = Object.entries(result).reduce((acc, [key, animalName]) => {
      acc[key] = animalName.map((name) => findAnimalNames(name, sorted, sex));
      return acc;
    }, {});
  }
  return result;
}

function schedule(dayName) {
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const [am, pm] = Object.values(val);
    acc[key] = key === 'Monday' ? 'CLOSED' : `Open from ${am}am until ${pm % 12}pm`;
    return acc;
  }, {});
  if (dayName) {
    const day = result[dayName];
    return {
      [dayName]: day,
    };
  }
  return result;
}

// retorna os dias, horario de abertura e fechamento nessa ordem
// cria-se um novo objeto, mantendo as propriedades alterando o valor delas,
// horario de abertura e fechamento usando AM/PM
// destrutura as horas(hours)
// usa object.entries para pegar as entradas (hours) e faz um reduce que retorna
// a propriedade e valor com reduce no array de array
// mantem a propriedade mas altera o valor
// primeiro valor -> key eh a chave e o segundo val o valor.
// usa-se % modulo -> 12 horas, divida por 12 as horas retornando o valor inteiro assim temos AM/PM
// se a condicao for verdadeira retorna open until, senao  retorna closed.

function oldestFromFirstSpecies(id) {
  const employee = employees.find((current) => current.id === id);
  const speciesId = employee.responsibleFor[0];
  const animal = animalsByIds(speciesId)[0];
  const { residents } = animal;
  const oldAnimals = residents.reduce((oldAnimal, acc) => (
    acc.age > oldAnimal.age ? acc : oldAnimal
  ));
  return Object.values(oldAnimals);
}

// procura um id de funcionario para encontrar a especie de animal
// gerenciado por esse funcionario e retorna array com nome, sexo e idade do animal mais velho.
// pega o funcionario, passa seu ID e retorna o animal que ele eh responsavel naquele ID.
// apos buscar os animais, faz um reduce, com acc apos o atual intera e verifica o mais velho
// usa condicionais se o animal atual tem idade maior que o mais velho, retorna o atual, senao retorna o mais velho

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;

  data.prices = {
    Adult: Math.ceil(Adult * (percentage + 100)) / 100,
    Senior: Math.ceil(Senior * (percentage + 100)) / 100,
    Child: Math.ceil(Child * (percentage + 100)) / 100,
  };
}
// destrutura adult, senior, child
// usa o Math.ceil para aredondar o valor
// soma a porcentagem + 100 mutiplica pelo adult/senior/child
// e divide por fora por 100.

function employeeById(id) {
  return employees.find((employee) => employee.id === id);
}

function employeeCoverage(idOrName) {
  const result = employees.reduce((acc, employee) => {
    const { firstName, lastName, responsibleFor } = employee;
    acc[`${firstName} ${lastName}`] = responsibleFor.map((id) => animalsByIds(id)[0].name);
    return acc;
  }, {});
  if (typeof idOrName === 'string' && idOrName.length !== 0) {
    const employee = employeeByName(idOrName) || employeeById(idOrName);
    const { firstName, lastName } = employee;
    const name = `${firstName} ${lastName}`;
    return { [name]: result[name] };
  }
  return result;
}

// sem paramentors, retorna uma lista de funcionarios e os animais pelos quais sao responsaveis
// faz um reduce com um objeto por for vazio, utiliza o acc e percorre o employee
// o first e lastName e os animais responsibleFor, faz um map no responsibleFor, pega o id do animal atravez da function animalsByIds, chama com id utiliza index[0] -> elemento name.
// retorna o nome dos animais e funcionarios responsaveis.
// ao receber nada retorna array vazio, ao receber id, retorna array com os elementos.
// crio a function employeeById que retorna somente os id.
// se for true retorno o employee com o objeto que tenha o primeiro nome, caso nao encontre
// procuro pelo id e retorno o objeto -> funcionario com os elementos(propriedades)
// firstName, lastName
// retorno [name] e o result.

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
