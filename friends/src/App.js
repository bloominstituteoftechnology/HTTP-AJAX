import React, { Component } from 'react';
import axios from 'axios';

import ListFriends from './ListFriends';
import Add from './addFriend';
import './App.css';

class App extends Component {

  state = {
    friends : [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        this.setState({friends: response.data})
      })
  }

  render() {
    return (
      <div className="App">
      <Add />
      <ListFriends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
