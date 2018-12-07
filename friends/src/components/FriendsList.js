import React from 'react';
import axios from 'axios';

const FriendsList = props => {
    return (
      <div>
         {props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <div>Name: { friend.name }</div><br />
              <div>Age: {friend.age}</div><br />
              <div>Email: {friend.email}</div><br /><br />
              <button onClick={() => props.deleteFriend(friend.id)}>
                Delete
              </button>
          </div>)}
        )};
      </div>
    )
  }

export default FriendsList;
