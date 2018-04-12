import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import InputFriend from './components/InputFriend';
import FriendsList from './components/FriendsList';
import Navigation from './components/Navigation';
import Friend from './components/Friend';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  };

  

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://friends.se/wp-content/uploads/2014/09/friends-storre.png' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to your friend list!</h1>
        </header>
        <Navigation />
        <Route exact path='/' component = {FriendsList} />
        <Route exact path='/add' component = {InputFriend} />
        <Route path = '/friends/:id' component = {Friend} />
      </div>
    );
  }
}



export default App;
