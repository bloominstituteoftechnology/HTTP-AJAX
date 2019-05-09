import React from 'react';
import './Friend.css';

const Friend = props => {
    return (
        <div className='friendCard'>
            <span>{props.friend.name}</span>
            <span>{props.friend.age}</span>
            <span>{props.friend.email}</span>
        </div>
    )

}
    
export default Friend;
