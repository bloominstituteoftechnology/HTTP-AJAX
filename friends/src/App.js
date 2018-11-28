import React, { Component } from 'react';
import axios from "axios";

import Friends from './Components/Friends'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response)
      this.setState({ friends: response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
