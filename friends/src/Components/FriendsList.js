import React from 'react';

import './ComponentsStyle.css';

function FriendsList(props) {
  function handleRemove(event) {
    event.preventDefault();
    props.handleRemoveFriend(event);
  }
  return (
    <ul className="App">
      {props.friendsProps.map(friend => {
        return (
          <li key={friend.id}>
            {friend.name}, {friend.age}, {friend.email}
            <button className="delete-button" onClick={handleRemove}>
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
