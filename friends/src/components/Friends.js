import React from "react";

const Friends = props => {
  return (
    <div className="friends">
      {props.friends.map(friend => (
        <h3 key={friend.id}>
          {friend.name} is {friend.age} years old.
        </h3>
      ))}
    </div>
  );
};

export default Friends;
