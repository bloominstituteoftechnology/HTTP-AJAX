import React from 'react';
import Friend from './Friend';

const FriendList = props => {
      return (
      <div className="friend-list">
        <h3>Contacts:</h3>
        {props.friends.map(friend => (
          <Friend friend={friend} key={friend.id}/>
        ))}
      </div>
    )
  }
  

  export default FriendList;