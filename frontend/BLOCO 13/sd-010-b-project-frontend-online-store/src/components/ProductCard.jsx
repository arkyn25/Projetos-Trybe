import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product: {
      title, thumbnail, price, id },
    addItemToCart, freeShipping } = this.props;
    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>
          { price }
          <br />
          {freeShipping ? <span data-testid="free-shipping">Frete Grátis</span> : '' }
        </p>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: {
              state: this.state,
            } } }
        >
          DETALHES
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addItemToCart(id, title, price) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  addItemToCart: PropTypes.func.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};
