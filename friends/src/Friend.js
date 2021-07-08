import React from 'react';
import './App.css';

const Friend = props => {
  return (
    <div>
      {props.friend.name}
      {props.friend.age}
      {props.friend.email}
    </div>
  );
};

export default Friend;
