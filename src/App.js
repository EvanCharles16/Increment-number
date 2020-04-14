import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kalkulasi from './components/content'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>"My First ReactJs' Project"</h1>
        <img src={logo} className="App-logo" alt="logo" />
          <Kalkulasi/>
      </header>
    </div>
  );
}

export default App;

