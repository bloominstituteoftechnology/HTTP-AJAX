import React from 'react';

function FriendsList(props) {
  return (
    <ul className="App">
      {props.friendsProps.map(friend => {
        return (
          <li key={friend.id}>
            {friend.name}, {friend.age}, {friend.email}
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
