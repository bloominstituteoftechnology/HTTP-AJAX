import React from 'react';

function FriendCard(props) {
    return (
        <div className="card friend-card">
            <h2>{props.friend.name}</h2>
            <span>Email: {props.friend.email}</span>
            <span>Age: {props.friend.age}</span>
        </div>
    );
}

export default FriendCard;
