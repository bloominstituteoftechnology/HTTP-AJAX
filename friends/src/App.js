import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
         .then(friends => this.setState({friends: friends.data}))
         .catch(err => console.log(new Error(err)));
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
         .then(friends => this.setState({friends: friends.data}))
         .catch(err => console.log(new Error(err)));
  }

  updateFriend = (id, updatedFriendObj) => {
    console.log(id);
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
         .then(friends => this.setState({friends: friends.data}))
         .catch(err => new Error(err));
  }

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Friends updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
