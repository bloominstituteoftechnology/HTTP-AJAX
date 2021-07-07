import React from 'react';
import './FriendCard.css';


const FriendCard = (props) => {
  return (
    <div className='friend-card'>
      <h3>{props.friend.id}: {props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>  
      <br></br>      
    </div>
  )
}

export default FriendCard;