import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    );
  }
}

export default CartButton;
