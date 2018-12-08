import React, { Component } from 'react';
import './App.css';
import {Gaoseng} from './translate/Gaoseng.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Gaoseng/>
        </header>
      </div>
    );
  }
}

export default App;
