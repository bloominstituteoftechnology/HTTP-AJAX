import React from "react";
import "./Friends.css";

const Friends = ({ friends }) => (
  <div>
    <div className="Friends-Title">Friends List:</div>
    <div className="Friends-List">
      {friends.map(friend => (
        <div key={friend.id}>
          <div>{friend.name}</div>
          <div>{friend.age}</div>
          <div>{friend.email}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
