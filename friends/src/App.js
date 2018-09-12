import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import FriendsList from './Friends/FriendsList';

const API = "http://localhost:5000/friends";

class App extends Component {
state = {
    friends:[]
};

componentDidMount() {
  axios
    .get(`${API}/friends`)
    .then(response => this.setState({ friends: response.data }));
}

  render() {
    return (
      <div className="App">
       <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
