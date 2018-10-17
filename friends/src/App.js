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
  axios
    .get('http://localhost:5000/friends')
    .then(response => this.setState({items: response.data}))
    .catch(error => console.log(error));
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
        />
      )} />

      <Route
      path = "/friendslist"
      render = {props => (
        <FriendsList {...props}
        items = {this.state.items}
        newFriends = {this.state.newFriends}
        />
      )} />
      </div>
    );
  }
}

export default App;
