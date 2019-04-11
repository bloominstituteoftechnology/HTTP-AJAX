import React from 'react';
import FriendCard from './FriendCard';

const FriendCardsContainer = props => {
  console.log(props)
  return(
    <div className='friends-container'>
    {props.friends.map(friend => <FriendCard key={Math.random()}
                                                  friend={friend}
                                                  id={friend.id}
                                                  deleteHandler={props.deleteFriend}/>)}
    </div>
  );
}

export default FriendCardsContainer;
