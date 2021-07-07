import React from 'react';
import Friend from './Friend';
import './Friends.css';

const Friends = props => {
  return(
    <div className="friend-list"> 
      {props.friends.map((friend, index) => <Friend key={index} friend = {friend} />)}
    </div>
  );
}

export default Friends;
