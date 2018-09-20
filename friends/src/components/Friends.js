import React from 'react';

import '../index.css';

function Friends(props) {
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

export default Friends;
