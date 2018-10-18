import React, { Component } from 'react';
import axios from 'axios';

import FriendCard from './components/FriendCard/FriendCard';
import NewFriendForm from './components/NewFriendForm/NewFriendForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  //if component mounted, sets state with data from server
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  //resets state after server change
  updateState = (newState) => {
    this.setState({
      friends: newState
    });
  }

  render() {
    return (
      <div className="App">
        <NewFriendForm updateState={this.updateState} />
        <div className="friend-card-wrapper">
          {this.state.friends.map((friend) => <FriendCard key={friend.id} friend={friend} updateState={this.updateState} />)}
        </div>
      </div>
    );
  }
}

export default App;
