import React from 'react';

const FriendCard = props => {
  const bold = {
    fontWeight: 'bold',
  }

  const deleteFriend = (e) => {
    e.preventDefault();
    props.deleteHandler(props.id);
  }

  return(
    <div className='friend-card'>
      <h1>{props.friend.name}</h1>
      <p><span style={bold}>Age:</span> {props.friend.age}</p>
      <p><span style={bold}>Email:</span> {props.friend.email}</p>
      <button onClick={deleteFriend}>
        Delete
      </button>
    </div>
  );
}

export default FriendCard;
