import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Friends from './Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
