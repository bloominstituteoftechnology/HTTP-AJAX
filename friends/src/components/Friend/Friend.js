import React from 'react';
import './Friend.css';

const Friend = (props) => {
  return (
    <div>
      <h1>Friend Component</h1>
      <ul>
        {props.friends.map((friend, i) => {
          return <li key={friend.id}>
            <h3>{friend.name}</h3>
            <h4>{friend.age}</h4>
            <h5>{friend.email}</h5>
            <button id={friend.id} onClick={props.removeFriend}>delete</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Friend;
