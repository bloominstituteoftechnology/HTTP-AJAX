import React from "react";

const Friends = props => {
  console.log(props.friends);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div>
            <h2>{friend.name}</h2>
            <h3>{friend.age}</h3>
            <h3>{friend.email}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default Friends;
