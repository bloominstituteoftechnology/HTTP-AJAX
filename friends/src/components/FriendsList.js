import React from 'react';

function FriendsList(props) {
  return (
    <div>
      <div>
        {props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <h2>{friend.name}</h2>
              <p>{friend.age}</p>
              <code>{friend.email}</code>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default FriendsList;
