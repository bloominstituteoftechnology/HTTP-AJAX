import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  state = {
    friends: []
  }
  render() {
    return (
   <div>Friends List here</div> 
    )
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then((response) => {console.log(response.data)})
    .catch((error) => {console.log('Error: ${error}')})
  }
}

export default FriendsList