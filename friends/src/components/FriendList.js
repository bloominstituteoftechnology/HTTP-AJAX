import React from 'react';

import FriendCard from './FriendCard';

const FriendList = ({ friends }) => {
  return (
    <div>
      {
        friends.map(friend => (
          <div className="ui container" key={friend.id}>
            <FriendCard friend={friend} />
          </div>
        ))
      }
    </div>
  );
}

export default FriendList;