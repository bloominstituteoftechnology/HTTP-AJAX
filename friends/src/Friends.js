import React from "react";
import "./index.css"

export default function Friends(props) {
  return (
    <div>
      {props.friendsList.map(friend => (
        <div className="friends-list">
          <h1>Name:</h1>
          <h4>{friend.name}</h4>
          <h1>Age:</h1>
          <h4>{friend.age}</h4>
          <h1>Email:</h1>
          <h4>{friend.email}</h4>
        </div>
      ))}
    </div>
  );
}
