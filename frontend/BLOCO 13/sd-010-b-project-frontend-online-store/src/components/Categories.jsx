import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategories: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  // Ao clicar na categoria faz uma busca com o que foi inserido no input e a categoria selecionada
  fetchAPI = async (category, query) => {
    const { handleQuery } = this.props;
    const results = await api.getProductsFromCategoryAndQuery(category, query);
    handleQuery(results, query);
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  selectedCategories(event) {
    const category = event.target.value;
    const { query } = this.props;
    this.setState({
      selectedCategories: category,
    }, () => {
      const { selectedCategories: newCategories } = this.state;
      this.fetchAPI(newCategories, query);
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section className="category">
        <ul>
          <li
            key="all"
            htmlFor="all"
          >
            <input
              defaultChecked
              type="radio"
              id="all"
              key="all"
              name="idCategory"
              value="all"
              onChange={ (event) => this.selectedCategories(event) }
            />
            TODAS
          </li>
          {categories.map(((category) => (
            <li
              key={ category.id }
              htmlFor={ category.id }
            >
              <input
                data-testid="category"
                type="radio"
                id={ category.id }
                key={ category.id }
                name="idCategory"
                value={ category.id }
                onChange={ (event) => this.selectedCategories(event) }
              />
              {category.name}
            </li>)))}
        </ul>

      </section>
    );
  }
}

Categories.propTypes = {
  // handleCategory: PropTypes.func.isRequired,
  handleQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Categories;
