import React from 'react';

const Friend = props => {
  return (
    <p>
      {props.friend.name} | {props.friend.age} | {props.friend.email}
    </p>
  );
}

export default Friend;