import React from 'react';

import Friend from './Friend';

import './FriendList.scss';

export default function FriendList({list, deleteFunc, setCurrentFriend}) {

  return (

    <div className='friend-list'>

      {list.map(friend => <Friend setCurrentFriend={setCurrentFriend} deleteFunc={deleteFunc} info={friend} id={friend.id} />)}

    </div>

  );

}
