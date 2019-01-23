import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Cards from './cards';
import FriendForm from './form';

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
          this.setState({friends: response.data})
        })
        .catch( err => {
          console.log(err)
        })
      }

  render() {
    return (
      <div className="App">
      <h1>Your Friends</h1>
        <Cards friends={this.state.friends} />
        <FriendForm />
      </div>
    );
  }
}

export default App;
