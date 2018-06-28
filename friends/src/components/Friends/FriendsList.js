import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
  return(
    <ul id="friendsList">
      {props.friends.map(friend => {
        return(
          <Friend key={`${friend.id}-${Math.random()}`} friend={friend} onDeleteFriend={props.onDeleteFriend} />
        )})
      }
    </ul>
  )
}

export default FriendsList;
