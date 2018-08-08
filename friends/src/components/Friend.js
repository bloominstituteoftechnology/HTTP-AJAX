import React from 'react';
import './Friend.css';

const Friend = props => {
  return (

    <div className = "friend-info">
    
      <h2>{props.friend.name}</h2>
      <h3> . age: {props.friend.age}</h3>
      <h3> . email: {props.friend.email}</h3>
    
    </div>
  )
}

export default Friend