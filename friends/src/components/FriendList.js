import React from "react";
import { Link } from "react-router-dom";

function FriendsList(props) {
  console.log(props.friends.length);
  return (
    <div className="main-content">
      {props.friends.map(friend => (
        <div key={friend.id} className="friend-card">
          <Link to={`/friends/${friend.id}`}>
            <h3>Name: {friend.name}</h3>
          </Link>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;