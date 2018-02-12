import React from 'react';

const ListFriends = props => {
  return props.friends.map(friend => {
    return (
      <div key={friend.id}>
        <div>Name: {friend.name}</div>
        <div>Age: {friend.age}</div>
        <div>Email: {friend.email}</div>
      </div>
    )
  })
}

export default ListFriends;