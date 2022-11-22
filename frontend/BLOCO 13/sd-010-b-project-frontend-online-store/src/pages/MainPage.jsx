import React from 'react';
import Input from '../components/Input';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      queryTerm: '',
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  handleQuery(products, query) {
    this.setState({
      products: products.results,
      queryTerm: query,
    });
  }

  addItemToCart(id, title, price) {
    if (localStorage.getItem(id)) {
      const item = localStorage.getItem(id).split('|');
      localStorage.setItem(id,
        `${id}|${item[1]}|${item[2]}|${(parseInt(item[3], 10) + 1)}`);
    } else {
      const newCartProduct = `${id}|${title}|${price}|1`;
      localStorage.setItem(id, newCartProduct);
    }
  }

  render() {
    const { products, queryTerm, shoppingCartProduct } = this.state;
    return (
      <main>
        <Input
          handleQuery={ this.handleQuery }
          shoppingCartProduct={ shoppingCartProduct }
        />
        <Categories
          handleQuery={ this.handleQuery }
          query={ queryTerm }
        />
        <ProductList products={ products } addItemToCart={ this.addItemToCart } />
      </main>
    );
  }
}

export default MainPage;
