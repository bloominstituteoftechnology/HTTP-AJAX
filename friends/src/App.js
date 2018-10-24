import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import './components/FriendsList';
import FriendsList from './components/FriendsList';
import AddFriend from './components/forms/AddFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: {},
      newFriendName: '',
      newFriendEmail: '',

    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
    .then((friends) => {
      this.setState({
        friends: friends.data,
      })
    })
  }

  addFriendNameUpdate = (e) => {
    this.setState({
      newFriendName: e.target.value,
    })
  }

  addFriendEmailUpdate = (e) => {
    this.setState({
      newFriendEmail: e.target.value,
    })
  }

  addFriendHandler = (e) => {
    e.preventDefault();
    let newFriend = {
      id: this.state.friends.length +1,
      name: this.state.newFriendName,
      email: this.state.newFriendEmail,
    }
    axios.post('http://localhost:5000/friends/', newFriend)
    .then(() => {
      axios.get('http://localhost:5000/friends/')
      .then((friends) => {
        this.setState({
          newFriendName: '',
          newFriendEmail: '',
          friends: friends.data,
        })
      })
    })

  }

  render() {
    if (!this.state.friends.length) {
      return <h1>Loading...</h1>
    }
    else {
    return (
      <div className="App">
          <div>
            <FriendsList friends={this.state.friends} />
          </div>
          <AddFriend 
            onNameChange={this.addFriendNameUpdate} 
            onEmailChange={this.addFriendEmailUpdate} 
            friendName={this.state.newFriendName}
            friendEmail={this.state.newFriendEmail}
            addFriend={this.addFriendHandler}
            />
      </div>
    );
    }
  }
}

export default App;
