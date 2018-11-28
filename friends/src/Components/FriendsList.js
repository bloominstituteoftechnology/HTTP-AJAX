import React from "react";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div className="friends-list">
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
