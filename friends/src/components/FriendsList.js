import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Friends:</h1>
        {this.state.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

export default Friends;
