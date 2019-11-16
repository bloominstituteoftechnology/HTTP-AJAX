import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends';
import AddFriendForm from './AddFriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  retrieveData() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log('ERROR retreiving:', err));
  }

  updateFriends = friends => {
    this.setState({ friends });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log('ERROR deleting:', err));
  };

  editFriend = editedFriend => {
    axios
      .put(`http://localhost:5000/friends/${editedFriend.id}`, editedFriend)
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log('ERROR deleting:', err));
  };

  componentDidMount() {
    this.retrieveData();
  }

  render() {
    return (
      <div>
        <AddFriendForm updateFriends={this.updateFriends} />
        <Friends
          friends={this.state.friends}
          deleteHandler={this.deleteFriend}
          editHandler={this.editFriend}
        />
      </div>
    );
  }
}

export default App;
