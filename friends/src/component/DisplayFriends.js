// React Imports
import React from 'react';

const DisplayFriends = props => {
  console.log(props.friends);
  // const { name, age, email, id } = props.friends;
  const { friends } = props;

  return (
    <div>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <h2>Name: {friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayFriends;
