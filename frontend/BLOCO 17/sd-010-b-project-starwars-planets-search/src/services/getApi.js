const getApi = async () => {
  try {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  } catch (err) {
    console.log(err);
  }
};

export default getApi;
