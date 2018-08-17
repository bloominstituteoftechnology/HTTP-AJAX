import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
      <button onClick={() => props.delete(props.friend.id)}>Delete</button>
    </div>
  );
};

export default Friend;
