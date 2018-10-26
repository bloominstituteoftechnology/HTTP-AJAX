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
      newFriendAge: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends/')
    .then((res) => {
      this.setState({
        friends: res.data,
      })
    })
    .catch(err => {
      console.log(err);
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

  addFriendAgeUpdate = (e) => {
    this.setState({
      newFriendAge: e.target.value,
    })
  }

  addFriendHandler = (e) => {
    e.preventDefault();
    let newFriend = {
      age: this.state.newFriendAge,
      name: this.state.newFriendName,
      email: this.state.newFriendEmail,
    }
    axios.post('http://localhost:5000/friends/', newFriend)
    .then(res => {
      this.setState({
        friends: res.data,
      })
    })
    .catch(err => {
      console.log(err);
    })

  }

  deleteFriendHandler = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({
        friends: res.data,
      })
    })
    .catch(err => {
      console.log(err);
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
          <AddFriend 
            onNameChange={this.addFriendNameUpdate} 
            onEmailChange={this.addFriendEmailUpdate} 
            onAgeChange={this.addFriendAgeUpdate}
            friendName={this.state.newFriendName}
            friendEmail={this.state.newFriendEmail}
            friendAge={this.state.newFriendAge}
            addFriend={this.addFriendHandler}
            />
            <FriendsList friends={this.state.friends} />
          </div>
          
      </div>
    );
    }
  }
}

export default App;
