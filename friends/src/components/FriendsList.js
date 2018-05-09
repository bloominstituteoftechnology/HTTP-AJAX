import React from 'react';

const FriendsList = props => {
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {props.friends.map((friend, index) => <li key={index}>{friend.name}</li>)}
      </ul>
    </div>
  );
}
 
export default FriendsList;