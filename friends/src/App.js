import React, { Component } from 'react';
import FriendsList from './Components/FriendsList'; 
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      friendsData: [], 
      loading: true
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/friends").then(friends => {
      this.setState({
        friendsData: friends.data, 
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts Application</h1>
        <FriendsList friends = {this.state.friendsData} />
      </div>
    );
  }
}

export default App;
