import React from 'react';
import '../App.css';

import Friend from './Friend'

function Display(props) {
  return (
    <div className="container">
      <h1>My Friends</h1>
      <div className="friends"> 
      {props.friends.map(friend => {
        return <Friend friend={friend} key={friend.id}/>
      })}
    </div>
    </div>
    
  )
}

export default Display;