import React from 'react';

function Friend(props) {
  return (
    <div>
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>email: {props.friend.email}</p>
    </div>
  );
}

export default Friend;
