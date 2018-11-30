import React from 'react';
import FriendCard from './FriendCard.js'
import {NavLink} from 'react-router-dom'

const FriendsList = ({friends, deleteFriend, selectFriend}) => {

  return (
    
      <div className={'friends-list'}>
        <h1>Friend APP</h1>
        {friends.map( friend => {
          return <NavLink onClick={() => selectFriend(friend)} key={friend.id} to={`/friend/${friend.id}`}> <FriendCard 
            key={friend.id}
            friend={friend}
            />
          </NavLink>
        })}
      </div>
    
  );
}

export default FriendsList;