import React from 'react';

function Friend(props) {
    return (
        <div className='friend-wrapper'>
            <div className='friend-info friend-name'>Name: {props.friend.name}</div>
            <div className='friend-info friend-age'>Age: {props.friend.age}</div>
            <div className='friend-info friend-email'>Email: {props.friend.email}</div>
        </div>
    )
}

export default Friend;