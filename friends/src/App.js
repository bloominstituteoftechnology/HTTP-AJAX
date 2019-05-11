import React, { Component } from 'react';
import './App.css';
import Friends from './Friends';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>My great Friends App!</h1>
        </header>
          <Route exact path="/" component={Friends} />
      </div>
    );
  }
}

export default App;
