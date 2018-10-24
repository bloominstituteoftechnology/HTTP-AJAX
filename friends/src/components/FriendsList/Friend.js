import React from 'react';

const Friend = props => {
  return (
    <div>
      <p>Name: {props.friend.name}</p>
      <span>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
      </span>
    </div>
  );
}

export default Friend;
