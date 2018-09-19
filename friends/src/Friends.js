import React from 'react';

function Friends(props) {
  return (
    <ul className="App">
      {props.friendsProps.map(friend => {
        <li>{friend.name}</li>;
      })}
    </ul>
  );
}

export default Friends;
