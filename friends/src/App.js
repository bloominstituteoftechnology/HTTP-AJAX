import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './friendscomponent';

class App extends Component {
  constructor() {
    super();
}

  render() {
    return (
      <div>
      <Friends />
      </div>
    );
  }
}

export default App;
