import React, { Component } from "react";
import { Link } from "react-router-dom";

class FriendCard extends Component {



  render() {
    return (
      <>
        <Link to={`/friends/${this.props.friend.id}`}
            >
          {`Name: ${this.props.friend.name}`} <br />{" "}
          {`Age: ${this.props.friend.age}`}
          <br />
          {this.props.friend.email}
        </Link>
        <br />
        <button onClick={this.props.deleteFriend}>Delete</button>
          <br /><br/>
      </>
    );
  }
}

export default FriendCard;
