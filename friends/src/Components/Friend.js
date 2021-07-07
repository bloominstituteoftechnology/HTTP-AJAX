import React from 'react';

const Friend = props => {
    return (
        <div className='friend-wrapper'>
        <div className='friend-info'>
          <p className="name">
            Name: {props.friend.name}
          </p>
        </div>
        </div>
    )
}