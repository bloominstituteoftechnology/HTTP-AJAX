import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend } from '../../actions/friends';

class FriendsInput extends Component {

  processFriend = (event) => {
    event.preventDefault();
    const friend = {};
    Object.keys(this.refs).forEach((key) => {
      friend[key] = this.refs[key].value;
    });

    const existingFriendIndex = this.props.friends.findIndex((f) => f.name === friend.name);
    console.log(existingFriendIndex);
    if (existingFriendIndex > -1 ) {
      this.updateFriend(friend, existingFriendIndex);
    } else {
      this.addNewFriend(friend);
      window.location.reload();
    }
    
  }

  addNewFriend = (friend) => {
    this.props.addFriend(friend);
  }

  updateFriend = (friend, index) => {
    this.props.updateFriend(friend, index);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.processFriend}>
          <h2>Add/edit a friend</h2>
          <p>Name: <input ref="name" /></p>
          <p>Age: <input ref="age" /></p>
          <p>Email: <input ref="email" /></p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default connect(null,  { addFriend, updateFriend })(FriendsInput);