import React from 'react';

class EvaluationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      grade: 0,
      description: '',
    };

    this.onChange = this.onChange.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  saveToLocalStorage() {
    const { email, grade, description } = this.state;
    localStorage.setItem(email, [grade, description]);
  }

  render() {
    return (
      <div className="eval-form">
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              required
              type="text"
              name="email"
              onChange={ (event) => this.onChange(event) }
            />
          </label>
          <br />
          Nota:
          <label htmlFor="nota1">
            <input
              name="grade"
              type="radio"
              id="nota1"
              value="1"
              onChange={ (event) => this.onChange(event) }
            />
            1
          </label>
          <label htmlFor="nota2">
            <input
              name="grade"
              type="radio"
              id="nota2"
              value="2"
              onChange={ (event) => this.onChange(event) }
            />
            2
          </label>
          <label htmlFor="nota3">
            <input
              name="grade"
              type="radio"
              id="nota3"
              value="3"
              onChange={ (event) => this.onChange(event) }
            />
            3
          </label>
          <label htmlFor="nota3">
            <input
              name="grade"
              type="radio"
              id="nota3"
              value="3"
              onChange={ (event) => this.onChange(event) }
            />
            4
          </label>
          <label htmlFor="nota3">
            <input
              defaultChecked
              name="grade"
              type="radio"
              id="nota3"
              value="3"
              onChange={ (event) => this.onChange(event) }
            />
            5
          </label>
          <br />
          <label htmlFor="description">
            Avaliação:
            <textarea
              data-testid="product-detail-evaluation"
              name="description"
              id="description"
              onChange={ (event) => this.onChange(event) }
            />
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.saveToLocalStorage }
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default EvaluationForm;
