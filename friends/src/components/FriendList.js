import React from 'react';

import Friend from './Friend';

export default function FriendList({list}) {

  return (

    <div className='friend-list'>

      {list.map(friend => <Friend info={friend} id={friend.id} />)}

    </div>

  );

}
