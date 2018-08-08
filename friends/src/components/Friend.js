import React from 'react';

const Friend = props => {
  return (
    <div className = "friend-info">
      <h3>{props.friend.name}</h3>
      <h4>{props.friend.age}</h4>
      <h4>{props.friend.email}</h4>
    </div>
  )
}

export default Friend