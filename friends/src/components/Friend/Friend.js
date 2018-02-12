import React from 'react';

const Friend = (props) => {
  return (
    <li className="friend">
      <div className="friend__name">{props.friend.name}</div>
      <div className="friend__age">{props.friend.age}</div>
      <div className="friend__email">{props.friend.email}</div>
    </li>
  )
}

export default Friend;