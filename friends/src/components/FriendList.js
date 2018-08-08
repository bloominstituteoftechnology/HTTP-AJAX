import React from 'react';

import FriendDisplay from './FriendDisplay';

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => <FriendDisplay key={friend.id} {...friend} />)}
    </div>
  );
}

export default FriendList;
