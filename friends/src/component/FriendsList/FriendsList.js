import React from "react";
import "./FriendsList.css";

function FriendsList(props) {
  console.log(props.friends);

  return (
    <div className="friends-wrapper">
      {props.friends.map(friend => (
        <div className="friends-card" key={friend.name}>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h2>{friend.email}</h2>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
