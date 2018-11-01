import React from 'react'
import'./friendly.css';

const Friend = props => {
    return (
        <div>
            {props.newFriend.name}
            {props.newFriend.age}
            {props.newFriend.email} 
        </div>
    );
}

export default Friend;