import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
        </div>
    );
}
 
export default Friend;