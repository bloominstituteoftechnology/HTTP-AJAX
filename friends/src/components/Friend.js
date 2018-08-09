import React from 'react';
import './Friend.css';

const Friend = props => {
  return (

    <div className = "friend-info">
    
      <h2>{props.friend.name}</h2>
      <h3>Age: {props.friend.age}</h3>
      <h3>Email: {props.friend.email}</h3>
      <div className = "button-container">
      <button onClick = {props.deleteFriend} > Remove </button>
      </div>
    </div>
  )
}

export default Friend