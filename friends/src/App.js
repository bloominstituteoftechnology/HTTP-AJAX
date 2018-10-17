import React, { Component } from 'react';
import './App.css';

import FriendList from './components/FriendList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  render() {
    return (
      <div className="App">
        <header>Look at all my shiny friends!</header>
        <FriendList friendArr={this.state.friends}/>
      </div>
    );
  }
}

export default App;
