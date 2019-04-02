import React from 'react';

const FriendCard = props => {
    return (
         <div className="friend-card">
            <p><span>Name:</span> {props.name}</p>
            <p><span>Age:</span> {props.age}</p>
            <p><span>email:</span> {props.email}</p>
        </div>
    )
}

export default FriendCard;