import React from 'react';
import './friends.css'
const Friend = (props) => {
  return (
    <div class="container">
      <div class="getList">Name: {props.friend.name} </div>
      <div class="getList">Age: {props.friend.age}</div>
      <div class="getList">Email: {props.friend.email}</div>
      <button onClick={() => props.delete(props.friend.id)}>Delete</button>
    </div>
  );
};

export default Friend;
