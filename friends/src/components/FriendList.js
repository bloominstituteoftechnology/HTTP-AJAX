import React from "react";
import { Link } from "react-router-dom";

export default class FriendList extends React.Component {
  render() {
    return (
      <>
        {this.props.friends.map(friend => (
          <div style={{ padding: "20px 0 40px 0" }} key={friend.id}>
            <div
              onClick={() => this.props.deleteFriend(friend)}
              style={{ cursor: "pointer" }}
            >
              X
            </div>
            <Link
              to={`/friends/${friend.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1>{friend.name}</h1>
              <div>{`Age: ${friend.age}`}</div>
              <div>{`Email: ${friend.email}`}</div>
            </Link>
          </div>
        ))}
      </>
    );
  }
}
