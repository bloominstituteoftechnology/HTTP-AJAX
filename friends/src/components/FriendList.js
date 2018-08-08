import React from 'react';

import FriendDisplay from './FriendDisplay';

const FriendList = props => {
  return (
    <div>
      {props.isLoading ? 
        <h1>Loading Friends, please hold...</h1> :
        props.friends.map(friend => <FriendDisplay key={friend.id} {...friend} />)
      }
    </div>
  );
}

export default FriendList;
