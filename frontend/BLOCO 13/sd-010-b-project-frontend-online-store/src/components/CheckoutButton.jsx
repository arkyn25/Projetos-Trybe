import React from 'react';
import { Link } from 'react-router-dom';

class CheckoutButton extends React.Component {
  render() {
    return (
      <Link data-testid="checkout-products" to="/checkout">checkout</Link>
    );
  }
}
export default CheckoutButton;
