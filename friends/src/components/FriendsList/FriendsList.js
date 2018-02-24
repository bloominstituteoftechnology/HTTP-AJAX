import React from 'react';
import Friend from '../Friend/Friend.js';
import './FriendsList.css'

const FriendsList = (props) => {
  return (
    <ul className="friends__list">
      {props.friends.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} delete={props.delete} />
      )})
    }
    </ul>
  )
}

export default FriendsList;