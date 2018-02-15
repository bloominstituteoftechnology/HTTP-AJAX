import React from 'react';

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
        <button onClick={() => {
                  props.onUpdate(friend);
                }}
              >Update</button>
      </div>
    )
  })
}

export default ListFriends;