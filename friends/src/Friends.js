import React from 'react';

function Friends(props) {
  return (
    <ul className="App">
      {props.friendsProps.map(friend => {
        return <li key={friend.id}>{friend.name}</li>;
      })}
    </ul>
  );
}

export default Friends;
