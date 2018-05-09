import React, { Component } from 'react';
import Friends from '../src/components/Friends'
import './App.css';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
