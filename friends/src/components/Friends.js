import React from 'react';

const Friends = props => {
  return(
    <div className='friends'>
      <h2>{props.friend.name}</h2>
      <div>Email: {props.friend.email}</div>
      <div>Age: {props.friend.age}</div>
      <button className='btn' onClick={ () => props.handleClick(props.friend) }>Edit</button>
    </div>
  )
}

export default Friends;