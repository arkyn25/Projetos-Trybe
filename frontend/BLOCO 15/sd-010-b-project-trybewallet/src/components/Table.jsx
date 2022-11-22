import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deletButton } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const { expenses, deletItem } = this.props;
    return expenses.map((item) => (
      <tr key={ item.id }>
        <td>{item.description}</td>
        <td>{item.tag}</td>
        <td>{item.method}</td>
        <td>{item.value}</td>
        <td>{item.exchangeRates[item.currency].name.split('/')[0]}</td>
        <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
        <td>
          {Number(item.value * item.exchangeRates[item.currency].ask)
            .toFixed(2)}
        </td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="edit-btn"
          >
            <img
              src="https://icon-library.com/images/icon-edit-png/icon-edit-png-0.jpg"
              height="20px"
              alt="Edit button"
            />
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deletItem(item.id) }
          >
            <img
              src="https://icon-library.com/images/trash-icon/trash-icon-16.jpg"
              height="20px"
              alt="Delete button"
            />
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <table border="1" rules="ROWS">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { this.renderTable() }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  deletItem: PropTypes.func.isRequired,
  // editExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // editExpenses: state.wallet.expenses,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletItem: (id) => dispatch(deletButton(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
