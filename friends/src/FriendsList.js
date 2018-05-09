import React, { Component } from "react";

const FriendsList = props => {
  console.log(props.friends);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div key={friend.id + friend.name}>
            {friend.id} {friend.name} {friend.age} {friend.email} 
          </div>
        );
      })}
    </div>
  );
};
export default FriendsList;