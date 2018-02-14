import React from 'react';
import UpdateFriend from './UpdateFriend';
import DeleteFriend from './DeleteFriend';

const ListFriends = props => {
  return props.friends.map(friend => {
    return (
      <div className='contactCard' key={friend.id}>
        <div>Name: {friend.name}</div>
        <div>Age: {friend.age}</div>
        <div>Email: {friend.email}</div>
        <button onClick={() => {
                  props.onDelete(friend.id);
                }}
              >Delete</button>
      </div>
    )
  })
}

export default ListFriends;