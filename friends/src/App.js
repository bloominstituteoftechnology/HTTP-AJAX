import React, { Component } from 'react';
import Friends from './component/Friends.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() { //found in help channel
    axios.get('http://localhost:5000/friends')
    then.(response => this.setState({friends.response.data}));
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
