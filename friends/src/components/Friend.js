import React from 'react';

const Friend = props => {
  return (
    <div>
      <h3>Name: {props.friend.name}</h3>
      <h4>Age: {props.friend.age}</h4>
      <h5>Email: {props.friend.email}</h5>
    </div>
  );
};

export default Friend;
