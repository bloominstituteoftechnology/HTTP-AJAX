import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';
import Friend from './Friend';
export default class FriendsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friendData: []
      };
    }

    componentDidMount() {
      axios
        .get('http://localhost:5000/friends')
        .then(response => {
          this.setState({
            friendData: response.data
          })
        })
        .catch(error => {
          console.error('Server Error', error);
        })
    }

    render() {
      return (
      <div className="friend-list">
        {this.state.friendData.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
    }
}
