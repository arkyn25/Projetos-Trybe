import React from 'react';

class Cart extends React.Component {
  findLocalItems() {
    const values = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i > 0) {
      const item = localStorage.getItem(keys[i - 1]).split('|');
      values.push(item);
      i -= 1;
    }
    return values;
  }

  render() {
    const results = this.findLocalItems();
    return (
      <section>
        {results.length === 0 ? (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
            {/* <div data-testid="shopping-cart-product-name" />
            <div data-testid="shopping-cart-product-quantity" /> */}
          </span>
        ) : (
          <div>
            {results.map((product) => (
              <div key={ product[0] }>
                <h1
                  data-testid="shopping-cart-product-name"
                >
                  { product[1] }
                </h1>
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  { product[3] }
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Cart;
