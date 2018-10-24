import React from 'react';

const Friend = props => {
  return (
    <div>
      <div>Name: {props.friend.name}</div>
      <div>Age: {props.friend.age}</div>
      <div>Email: {props.friend.email}</div>
    </div>
  );
}

export default Friend;
