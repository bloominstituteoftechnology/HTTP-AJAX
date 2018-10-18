import React from 'react';

import './ComponentsStyle.css';

function FriendsList(props) {
  return (
    <ul className="App">
      {props.friendsProps.map(friend => {
        return (
          <li key={friend.id}>
            {friend.name}, {friend.age}, {friend.email}
            <button
              className="delete-button"
              onClick={event => {
                props.updateFriend(event, friend);
                props.history.push('/friend-form');
              }}
            >
              Update
            </button>
            <button
              className="delete-button"
              onClick={event => {
                props.deleteFriend(event, friend.id);
                props.history.push('/my-friends');
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendsList;
