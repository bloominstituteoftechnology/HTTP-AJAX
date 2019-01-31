import React from "react";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <div className="friend" key={friend.id}>
          <h1>Name: {friend.name}</h1>
          <h3>Age: {friend.age}</h3>
          <h4>Email: {friend.email}</h4>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
