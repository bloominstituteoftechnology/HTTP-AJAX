import React from 'react';

import './Friend.css';

function Friend(props) {
  return (
    <div className='friend'>
      <div className='friend-row'>
        <p>Name</p>
        <p>{props.name}</p>
      </div>
      <div className="friend-row">
        <p>Age</p>
        <p>{props.age}</p>
      </div>
      <div className="friend-row">
        <p>email</p>
        <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Friend;
