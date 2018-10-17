import React from 'react';

const FriendsList = (props) => {
  const { friends } = props;

  return (
    <div>
      <h1>Friends List</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <h2>name: {friend.name}</h2>
          <p>age: {friend.age}</p>
          <p>email: {friend.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
