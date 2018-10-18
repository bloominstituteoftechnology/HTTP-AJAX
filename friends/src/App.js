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

  deleteItem = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
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
          emailAdd={this.handleEmailChange}
          submit={this.handleSubmit} />} />
        <Route path='/' render={props => <FriendsList
        {...props}
        friends={this.state.friends} 
        deleteItem={this.deleteItem} />} />
      </div>
    );
  }
}

export default App;
