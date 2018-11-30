import React, { Component } from "react";
import { Link } from "react-router-dom";
import FriendCard from "./FriendCard";

class List extends Component {

  render() {
    return (
      <>
        {this.props.state.friends.map(friend => (
          <FriendCard
            friend={friend}
            key={friend.id}
            deleteFriend={this.props.deleteFriend.bind(null, friend.id)}
          />
        ))}
        <Link to={"/form"}>Add a friend!</Link>
        <br /> <br />
      </>
    );
  }
}

export default List;
