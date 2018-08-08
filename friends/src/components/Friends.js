import React from 'react';
import Friend from './Friend.js';

const Friends = (props) =>{
  if (props.loading) {
    return (
      <h1>PAGE IS LOADING!</h1>
    )
  }
  else if (!props.loading) {
    return (
    <div>
      {props.friends.map(item => <Friend person={item} key={item.id} />)}
    </div>
  )}
}

export default Friends;
