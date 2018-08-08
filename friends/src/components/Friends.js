import React from "react";

const Friends = props => {
  return (
    <ul className="friends">
      {props.friends.map(friend => (
        <li key={friend.email}>
          {friend.name} is {friend.age} years old.
        </li>
      ))}
    </ul>
  );
};

export default Friends;
