import React from 'react';
import '../App.css';

function Friend(props) {
  return (
    <div className="friend">
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  )
}

export default Friend;