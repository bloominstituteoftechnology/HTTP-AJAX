import React from 'react';

const FriendsList = (props) => {
  const { friends } = props;

  return (
    <div>
      <h2>Friends List</h2>
      {friends.map(friend => (
        <div key={friend.id}>
          <p>name: {friend.name}</p>
          <p>age: {friend.age}</p>
          <p>email: {friend.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FriendsList;