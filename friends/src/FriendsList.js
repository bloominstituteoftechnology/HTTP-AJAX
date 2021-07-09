import React, { Component } from "react";
import Friend from './Friend';

const FriendsList = props => {
  return (
    <div>
      {props.friendProp.friends.map(friend => {
        return (
          <div className="cards">
            <div>Name:{friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email:{friend.email}</div>
						<button onClick={() => this.deleteFriend(friend.id)}>Delete Friend</button>
        		<button onClick={this.showupdateFriend}>Update Friend</button>
          </div>
        );
      })}
    </div>
  );
};
export default FriendsList;