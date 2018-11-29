import React from 'react';

import FriendCard from './FriendCard';

const FriendList = ({ friends, deleteFriend }) => {
  return (
    <div className="ui segment">
      <div style={{padding: '40px 0'}} className="friend-list ui centered raised cards">
        {
          friends.map(friend => (
            <FriendCard
              key={friend.id}
              deleteFriend={deleteFriend}
              friend={friend}
              />
          ))
        }
      </div>
    </div>
  );
}

export default FriendList;