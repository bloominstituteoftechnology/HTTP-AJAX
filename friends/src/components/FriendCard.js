import React from 'react';

const FriendCard = props => {
  const bold = {
    fontWeight: 'bold',
  }

  return(
    <div className='friend-card'>
      <h1>{props.friend.name}</h1>
      <p><span style={bold}>Age:</span> {props.friend.age}</p>
      <p><span style={bold}>Email:</span> {props.friend.email}</p>
    </div>
  );
}

export default FriendCard;
