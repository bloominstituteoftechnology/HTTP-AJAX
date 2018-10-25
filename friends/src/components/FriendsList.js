import React from 'react';
import Friends from './Friends';

const FriendsList = props => {
  return(
    <div className='list'>
      {props.friends.map((friend) => 
      <Friends friend={friend} key={friend.id}
      handleClick={props.handleClick}/>
      )}
    </div>
  )
}

export default FriendsList;