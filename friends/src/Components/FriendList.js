import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FriendList extends Component {
  render() {
    return (
      <div>
        <h3> Welcome to my shitty Friends List </h3>
        <Link to="/">Go Back Home!</Link>
        <br />
        <Link to="/add">Add New Friends!</Link>
        <br />
        <Link to="/edit">Edit Friends!</Link>
        {this.props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <h4>{friend.name}</h4>
              <div>age: {friend.age}</div>
              <div>{friend.email}</div>
              <button onClick={() => this.props.deleteFriend(friend.id)}>
                Delete Friend
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
