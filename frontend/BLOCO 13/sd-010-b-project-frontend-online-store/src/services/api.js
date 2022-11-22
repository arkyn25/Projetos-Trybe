export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(endPoint).then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(...rest) {
  let endPoint;
  if (rest.length === 2) {
    const [categoryId, query] = rest;
    endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else {
    const [product] = rest;
    endPoint = `https://api.mercadolibre.com/items/${product}`;
  }
  return fetch(endPoint).then((data) => data.json());
}

// export async function getProduct(product) {
//   const endPoint = `https://api.mercadolibre.com/items/${product}`;
//   return fetch(endPoint).then((data) => data.json());
// }
