import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kalkulasi from './components/content'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Kalkulasi/>
          <h1></h1>
      </header>
    </div>
  );
}

export default App;

