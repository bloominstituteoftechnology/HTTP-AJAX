import React, { Component } from "react";
import Friend from "./Friend";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

export default FriendsList;
