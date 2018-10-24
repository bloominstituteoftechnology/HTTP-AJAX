import React from 'react';

const FriendInfo = (props) => {
    return (
        <div className="friend-info">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default FriendInfo;