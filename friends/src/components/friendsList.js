import React from 'react';
import Friend from './friend.js'

const FriendsList = props => {
  return(
    <div className="friends-list">
      <div className="add-friend">
        <input
          type="text"
          placeholder="name..."
          onChange={props.handlers.name}
          value={props.values.name}
        />
        <input
          type="text"
          placeholder="age..."
          onChange={props.handlers.age}
          value={props.values.age}
        />
        <input
          type="text"
          placeholder="email..."
          onChange={props.handlers.email}
          value={props.values.email}
        />
        <button onClick={props.handlers.add}>Add friend</button>
      </div>
      <div className="friends">
        {props.friends.map((friend) => {
          return <Friend data={friend} key={friend.id} delete={props.handlers.delete} />
        })}
      </div>
    </div>
  )
}

export default FriendsList;
