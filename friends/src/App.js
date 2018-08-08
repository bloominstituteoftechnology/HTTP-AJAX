import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor () {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }
 
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(friendsData => this.setState({ friends: friendsData.data}))
    .catch(error => console.log(error));
  }
 
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <Route render={(props) => <FriendsList {...props} friendList = {this.state.friends}/>} />
      </div>
    );
  }
}

export default App;
