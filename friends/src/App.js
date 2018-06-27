import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendList from './FriendList';




class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }










  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <FriendList list={this.state.friends} />
      </div>
    );
  }
}

export default App;
