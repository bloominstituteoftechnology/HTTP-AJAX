import React, { Component } from 'react';
import Friends from './component/Friends.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
//something goes here
  }


class App extends Component {
  render() {
    return (
      <div>
      <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
