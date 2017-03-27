import React, { Component } from 'react';
import logo from './logo.svg';
import SwitchBoard from './components/SwitchBoard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lights-Out with React</h2>
        </div>
        <SwitchBoard rows={5} cols={5} />
      </div>
    );
  }
}

export default App;
