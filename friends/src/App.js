import React, { Component } from 'react';
import axios from 'axios';

import Friends from './components/Friends';
import './App.css';

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state} />
      </div>
    );
  }
}

export default App;
