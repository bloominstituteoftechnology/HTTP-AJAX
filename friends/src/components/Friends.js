import React from 'react';
import Friend from './Friend';

const Friends = props => {
    return (
      <div className='friends'>
        <p>hi i'm your friendslist!</p>
        {props.friendList.map(friend =>
        <Friend key={friend.id} {...friend} editFriend={props.editFriend}/>)}
      </div>
    )
  }



export default Friends;
