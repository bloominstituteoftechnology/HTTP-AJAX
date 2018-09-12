import React from 'react';
import '../App.css';

const Friend = props => {
  return (
    <div>
      <h1>{props.friend.name}</h1>
      <h3>{props.friend.age}</h3>
      <h3>{props.friend.email}</h3>
    </div>
  );
}

export default Friend;