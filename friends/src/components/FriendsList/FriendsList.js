import React, { Component } from 'react';
import axios from 'axios';
import Friend from '../Friend/Friend.js';
import './FriendsList.css'

class FriendsList extends Component {
  state = {
    friends: []
  }

  render = () => {
    return (
      <ul className="friends__list">
        {this.state.friends.map(friend => {
          return <Friend key={friend.name} friend={friend} />
        })}
      </ul>
    )
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
  }
}

export default FriendsList;