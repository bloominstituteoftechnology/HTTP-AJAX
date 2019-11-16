import React from 'react';
import '../App.css';
const FriendCard = (props) => {
    return (
        <div className="friend-list">
            <h3>{props.friend.name}</h3>
            <p>age: {props.friend.age}</p>
            <p>email: {props.friend.email}</p>
        </div>

    )
}

export default FriendCard;
