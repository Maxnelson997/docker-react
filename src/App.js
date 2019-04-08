import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              What is goodie!?
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn iOS Development.
          </a>
          <p>
            Our courses are designed to combine a concept driven approach with full scale app development.
            <div></div>
            This provides new and pro developers the necessary skills to create and finihs apps for clients and themselves, not just the ability the build features.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
