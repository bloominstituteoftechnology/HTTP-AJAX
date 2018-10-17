import React, { Component } from 'react';
import axios from 'axios';

import FriendCard from './components/FriendCard';
import NewFriendForm from './components/NewFriendForm';

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
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  updateState = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map((friend) => <FriendCard key={friend.id} friend={friend} />)}
        <NewFriendForm updateState={this.updateState} />
      </div>
    );
  }
}

export default App;
