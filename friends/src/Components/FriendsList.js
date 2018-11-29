import React from 'react';
import FriendCard from './FriendCard.js'

const FriendsList = ({friends, deleteFriend}) => {
  // console.log(friends[0].name)
  return (
    <div className={'friends-list'}>
      <h1>Friend APP</h1>
      {friends.map( friend => {
        return <FriendCard 
          key={friend.id}
          friend={friend}
          deleteFriend={deleteFriend}
           />
      })}
    </div>
  );
}

export default FriendsList;