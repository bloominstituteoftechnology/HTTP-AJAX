import React from 'react';
import Friend from './Friend';
import './Friends.css';

function Friends(props) {
    return (
      <div>
        {props.friends.map(friend => <Friend key={friend.name} friend={friend} />)} 
      </div>
    );
};
 export default Friends; 