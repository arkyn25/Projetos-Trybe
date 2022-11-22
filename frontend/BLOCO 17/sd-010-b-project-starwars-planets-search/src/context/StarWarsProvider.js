import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getApi from '../services/getApi';
import context from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterPlanets, setFilterPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayFiltered, setDisplayFiltered] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    number: '',
    column: 'population',
    comparison: 'maior que',
  });

  const planetData = async () => {
    const planets = await getApi();
    setData(planets);
    setFilterPlanets(planets);
    setLoading(false);
  };

  useEffect(() => {
    planetData();
  }, []);

  const filterPlanetsByName = ({ target: { value } }) => {
    const filterData = data.filter(({ name }) => name.toLowerCase().includes(value));

    setFilterPlanets(filterData);
  };

  const filterByNumericValues = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filterButton = () => {
    const { number, column, comparison } = filters;

    const filteredData = data.filter((planet) => {
      const columnCompare = Number(planet[column]);
      const valueCompare = Number(number);
      if (comparison === 'maior que') {
        return columnCompare > valueCompare;
      }
      if (comparison === 'menor que') {
        return columnCompare < valueCompare;
      }
      return columnCompare === valueCompare;
    });
    setFilterPlanets(filteredData);
    setDisplayFiltered(true);
  };

  const filterOptions = ({ target }) => {
    const { name, value } = target;
    if (name === 'column') {
      setFilters({ ...filters, column: value });
    } else if (name === 'comparison') {
      setFilters({ ...filters, comparison: value });
    } else {
      setFilters({ ...filters, number: value });
    }
  };

  const resetFilter = () => {
    setFilterPlanets(data);
    setDisplayFiltered(true);
  };

  const contextValue = {
    filterPlanets,
    loading,
    displayFiltered,
    filters,
    resetFilter,
    filterPlanetsByName,
    filterByNumericValues,
    filterButton,
    filterOptions,
  };

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
