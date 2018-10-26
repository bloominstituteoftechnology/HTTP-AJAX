import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class FriendsList extends Component {

state = {
  friends: [],
  name: '',
  age: '',
  email: ''
};

componentDidMount() {
axios.get('http://localhost:5000/friends')
.then(res => this.setState({friends: res.data}));
}

  render() {
    return (
      <h1>Friends</h1>
    
      
    );
  }
}

export default FriendsList;