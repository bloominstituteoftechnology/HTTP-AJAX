import React from "react";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div className="friends-list">
      <div className="friends-list-title">
        <Link to="/">
          <h1>Friends</h1>
        </Link>
      </div>

      {props.data.map(friend => (
        <Link
          to={`/friend/${friend.id}`}
          key={friend.id}
          className="friend-link"
        >
          <h3>{friend.name}</h3>
        </Link>
      ))}

      <Link to="/add-form" className="add-nav">
        <button onClick={props.addNewFriend}>Add a Friend</button>
      </Link>
    </div>
  );
};

export default FriendsList;
