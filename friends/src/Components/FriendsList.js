import React from 'react';

import './ComponentsStyle.css';

function FriendsList(props, { deleteFriend, history, updateFriend }) {
  return (
    <ul className="App">
      {props.friendsProps.map(friend => {
        return (
          <li key={friend.id}>
            {friend.name}, {friend.age}, {friend.email}
            <button
              className="delete-button"
              onClick={event => {
                updateFriend(event, friend);
                history.push('/friend-form');
              }}
            >
              Update
            </button>
            <button
              className="delete-button"
              onClick={event => {
                deleteFriend(event, friend.id);
                history.push('/my-friends');
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
