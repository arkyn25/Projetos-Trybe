import React from 'react';
import { Redirect } from 'react-router';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  phone: '',
  cep: '',
  address: '',
  paymentMethod: '',
  redirect: false,
};

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick= () => {
    const arrayValues = Object.values(this.state);
    const check = arrayValues.some((element) => element === '');
    if (!check) {
      this.setState({ redirect: true });
    }
  }

  inputName() {
    const { name } = this.state;
    return (
      <label htmlFor="idName">
        Nome completo
        <input
          data-testid="checkout-fullname"
          type="text"
          id="idName"
          name="name"
          value={ name }
          onChange={ this.handleChange }
          placeholder="Nome Completo"
          required
          onFocus=""
        />
      </label>
    );
  }

  inputEmail() {
    const { email } = this.state;
    return (
      <label htmlFor="idEmail">
        Email
        <input
          data-testid="checkout-email"
          type="text"
          name="email"
          id="idEmail"
          value={ email }
          onChange={ this.handleChange }
          placeholder="Email"
        />
      </label>
    );
  }

  inputCpf() {
    const { cpf } = this.state;
    return (
      <label htmlFor="idCpf">
        CPF
        <input
          data-testid="checkout-cpf"
          type="text"
          id="idCpf"
          name="cpf"
          value={ cpf }
          onChange={ this.handleChange }
          placeholder="CPF"
        />
      </label>
    );
  }

  inputPhone() {
    const { phone } = this.state;
    return (
      <label htmlFor="idTelefone">
        Telefone
        <input
          data-testid="checkout-phone"
          type="text"
          name="phone"
          id="idTelefone"
          value={ phone }
          onChange={ this.handleChange }
          placeholder="Telefone"
        />
      </label>
    );
  }

  inputCep() {
    const { cep } = this.state;
    return (
      <label htmlFor="idCep">
        CEP

        <input
          data-testid="checkout-cep"
          type="text"
          id="idCep"
          name="cep"
          value={ cep }
          onChange={ this.handleChange }
          placeholder="CEP"
        />
      </label>
    );
  }

  inputAddress() {
    const { address } = this.state;
    return (
      <label htmlFor="idEndereco">
        Endereço
        <input
          data-testid="checkout-address"
          type="text"
          id="idEndereco"
          name="address"
          value={ address }
          onChange={ this.handleChange }
          placeholder="Endereço"
        />
      </label>
    );
  }

  inputPayment() {
    return (
      <section>
        <label htmlFor="idBoleto">
          Boleto
          <input
            type="radio"
            id="idBoleto"
            name="paymentMethod"
            value="Boleto"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="idVisa">
          Visa
          <input
            type="radio"
            id="idVisa"
            name="paymentMethod"
            value="Visa"
            onChange={ this.handleChange }
          />
        </label>
        MasterCard
        <label htmlFor="idMasterCard">
          <input
            type="radio"
            id="idMasterCard"
            name="paymentMethod"
            value="MasterCard"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="idElo">
          Elo
          <input
            type="radio"
            id="idElo"
            name="paymentMethod"
            value="Elo"
            onChange={ this.handleChange }
          />
        </label>
      </section>

    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      this.setState(INITIAL_STATE);
      return <Redirect to="/" />;
    }
    return (
      <main>
        <section>
          <h2>Revise Seus Produtos</h2>
        </section>

        <form>
          <h2>Informações do Comprador</h2>
          {this.inputName()}
          {this.inputEmail()}
          {this.inputCpf()}
          {this.inputPhone()}
          {this.inputCep()}
          {this.inputAddress()}
        </form>
        <section>
          <h2>Método de Pagamento</h2>
          {this.inputPayment()}
        </section>
        <button type="button" onClick={ this.handleClick }>Comprar</button>
      </main>

    );
  }
}
export default Checkout;
