import React, { Component } from 'react';
import logo from './logo.svg';
import PlayableSwitchBoard from './components/PlayableSwitchBoard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lights-Out with React</h2>
        </div>
        <PlayableSwitchBoard />
      </div>
    );
  }
}

export default App;
