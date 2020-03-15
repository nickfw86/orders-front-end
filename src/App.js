import React from 'react';
import logo from './nick.JPG';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Nicks second react app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Input />
      </header>
    </div>
  );
}

export default App;
