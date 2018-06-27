import React from 'react';
import '../App.css';

const Friend = props => {
  return (
    <ul>
      <li>Name: {props.friend.name}</li>
      <li>Age: {props.friend.age}</li>
      <li>Email: {props.friend.email}</li>

    </ul>
  )
}

export default Friend;
