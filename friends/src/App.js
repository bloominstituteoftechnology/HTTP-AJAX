import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }));
  }
  render() {
    return (
      <FriendsList friends={this.state.friends}/>
    );
  }
}

export default App;
