import React, { Component } from "react";

class ListOfFriends extends Component {
  render() {
    return (
      <ul>
        {this.props.friends.map(friend => (
          <li>
            Name: {friend.name} Age: {friend.age} Email: {friend.email}
          </li>
        ))}{" "}
      </ul>
    );
  }
}

export default ListOfFriends;
