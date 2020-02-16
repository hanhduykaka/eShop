import React from 'react';
import Todos from './component/Todos'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Arena of Valor </h1>
        <Todos></Todos>
        <footer>
          <h2> @Tài nè </h2>
        </footer>
      </header>
    </div>
  );
}

export default App;
