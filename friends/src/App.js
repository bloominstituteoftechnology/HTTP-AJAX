import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import './App.css';
import axios from 'axios';

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
        this.setState({friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
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



  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <FriendsForm
          {...props}
          newName={this.state.newName}
          newAge={this.state.newAge}
          newEmail={this.state.newEmail}
          nameAdd={this.handleNameChange}
          ageAdd={this.handleAgeChange}
          emailAdd={this.handleEmailChange} />} />
        <Route path='/' render={props => <FriendsList
        {...props}
        friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;
