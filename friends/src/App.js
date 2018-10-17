import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newFriends: {
        age: '',
        name: '',
        email: ''
      }
    }
  }

componentDidMount() {
  axios.get('http://localhost:5000/friends')
    .then(response => this.setState({items: response.data}))
    .catch(error => console.log(error));
}

changeHandler = event => {
  this.setState({
      newFriends: {
          ...this.state.newFriends,
          [event.target.name]: event.target.value
      }
  });
}

addFriend = event => {
  event.preventDefault();
  axios.post('http://localhost:5000/friends', this.state.newFriends)
      .then(response => this.setState({items: response.data}))
}

deleteFriend = event => {
event.preventDefault();
axios.delete(`http://localhost:5000/friends/${}`)
  .then(reponse => this.setState({items: reponse.data}))
}

  render() {
    return (
      <div className="App">

      <Route
      exact path = "/"
      render = {props => (
        <Home {...props}
        items = {this.state.items}
        newFriends = {this.state.newFriends}
        addFriend = {this.addFriend}
        deleteFriend = {this.deleteFriend}
        changeHandler = {this.changeHandler}
        />
      )} />

      <Route
      path = "/friendslist"
      render = {props => (
        <FriendsList {...props}
        items = {this.state.items}
        newFriends = {this.state.newFriends}
        addFriend = {this.addFriend}
        deleteFriend = {this.deleteFriend}
        changeHandler = {this.changeHandler}
        />
      )} />
      </div>
    );
  }
}

export default App;
