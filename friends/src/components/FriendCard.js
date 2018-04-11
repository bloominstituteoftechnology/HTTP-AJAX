import React from "react";
import { Link } from 'react-router-dom';
import './FriendCard.css';

const FriendCard = props => {
  return (
    <Link to={`/${props.name.replace(/ /g, "")}`} className='card-container'>
      <h4>{props.name}</h4>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </Link>
  );
};

export default FriendCard;