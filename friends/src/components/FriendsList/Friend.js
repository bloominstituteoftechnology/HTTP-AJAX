import React from 'react';

const Friend = props => {
  console.log(props);
  return (
    <div>
      <div>Name: {props.friend.name}</div>
      <div>Age: {props.friend.age}</div>
      <div>Email: {props.friend.email}</div>
      <p style={{cursor: 'pointer'}} onClick={props.deleteFriendHandler(props.friend.id)}>X</p>
    </div>
  );
}

export default Friend;
