import React from 'react';

import './friends.css'

const Friend = (props) => {
    return (
        <div className='friend'>
            <div className='friendID'>{props.friend.id}</div>
            <div>{props.friend.name}</div>
            <div>{props.friend.email}</div>
        </div>
    )
}

export default Friend;
