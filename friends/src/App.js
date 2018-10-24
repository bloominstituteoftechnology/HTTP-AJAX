import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './List'


class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
  }

  render() {
    return (
      <div>
        <List friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
