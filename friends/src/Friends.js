import React from "react";
import axios from "axios";

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div>{friend.name}</div>
      ))}
    </div>
  );
};

export default Friends;
