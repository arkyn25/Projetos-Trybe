import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MainPage from './pages/MainPage';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart"
            component={ Cart }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/details/:id" component={ ProductDetails } />
          <Route exact path="/" component={ MainPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
