import React from 'react';
import FriendCard from './FriendCard';

const FriendContainer = (props) => {
  return (
    <div className='friend-list-container'>
      {props.friends.map(friend => <FriendCard key={friend.id} friend={friend} />)}
    </div>
  )  
}

export default FriendContainer;