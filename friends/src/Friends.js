import React, { Component } from 'react';
import './Friends.css';
import axios from 'axios';

class Friends extends Component {
  state = {
    friends: [],
    newName: '',
    newAge: 0,
    newEmail: '',
  };

  render() {
    return (
      <div className="App">
      <div>
        <h1>Lambda Friends</h1>
      </div>
      <ul>
        {this.state.friends.map(friend => { return(
          <li key = {friend.email}>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>E-Mail: {friend.email}</div>
          </li>
      )  })}
      </ul>
      <form onSubmit = {this.submitNewFriend}>
      <button>
      <input type = 'text' value = {this.state.newName} onChange = {this.handleNameChange} placeholder='Enter Name' />
      <input type = 'text' value = {this.state.newAge} onChange = {this.handleAgeChange} placeholder = 'Enter Age' />
      <input type = 'text' value = {this.state.newEmail} onChange = {this.handleEmailChange} placeholder = 'Enter E-mail' />
      </button>
      </form>
      </div>
    );
  }

  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value,
    })
  }

  handleAgeChange = (event) => {
    this.setState({
      newAge: event.target.value,
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      newEmail: event.target.value,
    })
  }

  submitNewFriend = (event) => {
    event.preventDefault();
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail,
    }
    this.setState({
      friends: [...this.state.friends, newFriend]
    })
  }

  componentWillMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(error => {
      console.log('There was an error', error)
    })
  }
}

export default Friends;
