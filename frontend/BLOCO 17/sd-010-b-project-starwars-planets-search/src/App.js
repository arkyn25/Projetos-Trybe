import React from 'react';
import './App.css';

import Provider from './context/StarWarsProvider';
import Table from './components/Table';
import InputFilter from './components/InputFilter';

function App() {
  return (
    <div className="App">
      <Provider>
        <InputFilter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
