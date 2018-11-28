import React from "react";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div className="friends-list">
      <div className="friends-list-title">
        <h1>Friends</h1>
      </div>

      {props.data.map(friend => (
        <Link
          to={`/friend-${friend.id}`}
          key={friend.id}
          className="friend-link"
        >
          <h3>{friend.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default FriendsList;
