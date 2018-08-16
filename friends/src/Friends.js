import React from "react";

const Friends = props => {
  return (
    <div>
      {props.friendsList.map(friend => (
        <div>
          <h2>{friend.name}</h2>
          <h2>{friend.age}</h2>
          <h2>{friend.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Friends;
