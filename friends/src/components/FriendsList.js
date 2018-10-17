import React from 'react';

function FriendsList(props) {
  console.log('friends props are: ', props);
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
        <div
          className="friend-card"
          key={friend.id}
        >
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <code>{friend.email}</code>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;