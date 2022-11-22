import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import EvaluationForm from '../components/EvaluationForm';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const result = await api.getProductsFromCategoryAndQuery(id);
    this.setState({
      data: result,
    });
  }

  addItemToCart(id = '0000', title = 'Pequeno Principe, O', price = 0) {
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
    const { data } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <main>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <AiOutlineShoppingCart />
        </Link>
        <h1 data-testid="product-detail-name">
          {data === undefined ? 'Pequeno Principe, O' : data.title}
        </h1>
        <h1>
          R$:
          {data !== undefined ? data.price : ''}
        </h1>
        <img src={ data !== undefined ? data.thumbnail : '' } alt="" />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addItemToCart(id, data.title, data.price) }
        >
          Adicionar ao carrinho
        </button>
        <EvaluationForm />
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf,
    id: PropTypes.string,
  }).isRequired,
};
export default ProductDetails;
