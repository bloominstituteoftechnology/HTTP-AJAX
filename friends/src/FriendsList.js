import React, { Component } from "react";


const FriendsList = (props) =>  {
  let FriendsList = [];

  if(props.friendProp.friends.length){
    FriendsList = props.friendProp.friends;
  }

  return (
      <div>
        {FriendsList.map(friend => {
            return (
              <div>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
              </div>
            );
          })}
      </div>
  );

}

export default FriendsList;
