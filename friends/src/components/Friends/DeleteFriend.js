import React, { Component } from 'react';
import axios from 'axios';

class DeleteFriend extends Component {
  deleteFriend = () => {
    let { id } = this.props.friend;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.props.updateFriends(res.data))
      .catch(err => console.log(err));
  };
  render() {
    let friend = this.props.friend;
    return <button onClick={this.deleteFriend}>Delete {friend.name}</button>;
  }
}

export default DeleteFriend;