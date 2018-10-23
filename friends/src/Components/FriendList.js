import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.data.map(friend => {
        return (
          <div key={friend.id}>
            <h1>Name: {friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendList;
