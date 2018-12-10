import React, { Component } from 'react';
import './css/App.css';
import './css/Gaoseng.css';
import {Gaoseng} from './translate/Gaoseng.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Gaoseng className="Gaoseng"/>
        </header>
      </div>
    );
  }
}

export default App;
