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
      editingId: null,
      isEditing: false
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

  updateItem = () => {
    const newFriends = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };
    this.setState({ newName: '', newAge: '', newEmail: '' });
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        newFriends
      )
      .then(response => {
        this.setState({
          friends: response.data,
          editingId: null,
          isEditing: false,
        });
      })
      .catch(error => console.log(error));
  };

  setUpUpdateForm = (ev, friend) => {
    ev.preventDefault();
    this.setState({
      friend, // same as item: item,
      isEditing: true,
      editingId: friend.id
    });
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
          submit={this.handleSubmit} 
          isEditing={this.state.isEditing}
          updateItem={this.updateItem} />} />
        <Route path='/' render={props => <FriendsList
        {...props}
        friends={this.state.friends} 
        deleteItem={this.deleteItem} 
        updateItem={this.setUpUpdateForm} />} />
      </div>
    );
  }
}

export default App;
