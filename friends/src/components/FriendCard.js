import React from 'react';

const FriendCard = props => {
    return (
         <div className="friend-card">
            <p><span>Name:</span> {props.friend.name}</p>
            <p><span>Age:</span> {props.friend.age}</p>
            <p><span>email:</span> {props.friend.email}</p>
        </div>
    )
}

export default FriendCard;