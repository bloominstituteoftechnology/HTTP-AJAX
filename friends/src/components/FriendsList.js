import React from "react";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return props.data.map(friend => (
    <div className="friend-link" key={friend.id}>
      <Link exact to={`/friend-${friend.id}`}>
        <h1>{friend.name}</h1>
      </Link>
    </div>
  ));
};
export default FriendsList;
