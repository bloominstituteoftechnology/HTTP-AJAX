import React from 'react';
import { NavLink } from 'react-router-dom';
import './allcomp.css';
const Friend = props => {
  return (
    <div className ='friend-container'>
      {props.friends.map(friend => {
          return(
          <div className = 'friend' key = {friend.id}>
          <button className = 'delete' onClick={props.deleteFriend} id={friend.id}>X</button>
          <div className = "content">
            <div className="friend-content">
              <p>Name: {friend.name}</p> <p>Age:{friend.age}</p> <p>Email: {friend.email}</p>
            </div>
            <button className = 'update' onClick={props.updateFriend} id={friend.id}>Update</button>
          </div>
          </div>
          );
        })}
    </div>
  );
};

export default Friend;