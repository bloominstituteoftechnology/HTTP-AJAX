import React from 'react';

const Friend = props => {
  return (
    <div className="friend">
      <p>id: {props.friend.id}</p>
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <div
        className="delete-friend"
        onClick={props.deleteFriend(props.friend.id)}
      >
        <span>X</span>
      </div>
    </div>
  );
};

export default Friend;
