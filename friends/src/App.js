import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendCard from './Friends/FriendCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {this.setState({ friends: response.data })})
      .catch(err => {
        console.log(err);
      })
    }


  render() {
    return (
      <div className="App">
        <h1>You're not alone! :)</h1>
        <h2>Friends List:</h2>
        <FriendCard friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
