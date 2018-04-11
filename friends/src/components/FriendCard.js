import React from "react";
import './FriendCard.css';

const FriendCard = props => {
  return (
    <div className='card-container'>
      <h4>{props.name}</h4>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default FriendCard;