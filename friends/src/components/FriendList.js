import React, { Component } from 'react';

const FriendList = (props) => {
  console.log(props.friends);
  return (
    <ul>
      {props.friends.map(friend => {
        return (
          <li key={friend.id}>
            <div className="friend-name">{friend.name}</div>
            <div className="friend-age">{`Age: ${friend.age}`}</div>
            <div className="friend-email">{`Email: ${friend.email}`}</div>
          </li>
        );
      })
      }
    </ul>  
  )
}

export default FriendList;