import React from 'react';

const FriendsList = props => {
  return(
    <ul id="friendsList">
      {props.friends.map(friend => {
        return(
          <li key={`${friend.id}-${Math.random()}`}>
            <div className="friend__name">{friend.name}</div>
            <div className="friend__age">{friend.age}</div>
            <div className="friend__email">{friend.email}</div>
          </li>
        )})
      }
    </ul>
  )
}

export default FriendsList;
