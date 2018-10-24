import React, { Component } from 'react';

import axios from 'axios';

import FriendsList from './FriendsList.js';

class FriendsContent extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friends} />
      </div>
    )
  }
}

export default FriendsContent;
