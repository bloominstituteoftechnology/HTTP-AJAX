import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import FriendsList from './FriendsList.js';

class FriendsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data.friends});
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
