import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FriendList from './components/FriendsList.js';
import FriendForm from './components/FriendsForm.js'
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newName: '',
      newAge: '',
      newEmail: '',
    }
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  handleNameChange = event => {
    this.setState({ newName: event.target.value });
  };

  handleAgeChange = event => {
    this.setState({ newAge: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ newEmail: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };
    this.setState({ newName: '', newAge: '', newEmail: '' });
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        this.setState({
          newName: '',
          newAge: '',
          newEmail: '',
          friends: response.data
        });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <FriendForm
          {...props}
          newName={this.state.newName}
          newAge={this.state.newAge}
          newEmail={this.state.newEmail}
          nameAdd={this.handleNameChange}
          ageAdd={this.handleAgeChange}
          emailAdd={this.handleEmailChange}
          submitFriend={this.handleSubmit} />} />
        <Route path='/' render={props => <FriendList
          {...props}
          friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
