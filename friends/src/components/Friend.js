import React from 'react';
import '../App.css';

const Friend = props => {
  return (
    <div className="friend">
      <div className="friendDetail"><b>Name:</b> {props.friend.name}</div>
      <div className="friendDetail"><b>Age:</b> {props.friend.age}</div>
      <div className="friendDetail"><b>Email:</b> {props.friend.email}</div>
    </div>
  );
}

export default Friend;
