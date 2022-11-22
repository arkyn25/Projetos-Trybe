import React, { useContext } from 'react';
import context from '../context/StarWarsContext';
import './InputFilter.css';

function InputFilter() {
  const { filterPlanetsByName,
    filterByNumericValues,
    filterButton,
    displayFiltered,
    resetFilter,
    filters,
  } = useContext(context);

  const filterButtonOptions = () => {
    const { column, comparison, number } = filters;
    if (displayFiltered) {
      return (
        <div>
          <p data-testid="filter">
            { `Filtrado por ${column} ${comparison} ${number}` }
            <button type="button" onClick={ resetFilter }>X</button>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="inputFilter">
      <h1>Star Wars Planets</h1>
      <form action="" className="form-control">
        <fieldset className="fieldName">
          <legend>Filtrar por nome:</legend>
          <input
            type="text"
            data-testid="name-filter"
            className="fieldName"
            onChange={ (ev) => {
              filterPlanetsByName(ev);
            } }
          />
        </fieldset>
        <fieldset className="fieldValue">
          <legend>Filtrar por valores:</legend>
          <select
            name="column"
            data-testid="column-filter"
            onChange={ filterByNumericValues }
            value={ filters.column }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <select
            name="comparison"
            data-testid="comparison-filter"
            onChange={ filterByNumericValues }
            value={ filters.comparison }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            type="number"
            name="number"
            data-testid="value-filter"
            onChange={ filterByNumericValues }
            value={ filters.number }
          />
          <button
            type="button"
            data-testid="button-filter"
            onClick={ filterButton }
          >
            Filtrar

          </button>
          <fildset>
            <h4>Filtros:</h4>
            { filterButtonOptions() }
          </fildset>
        </fieldset>
      </form>
    </div>
  );
}

export default InputFilter;
