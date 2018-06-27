import React from 'react';

const FriendCard = (props) => {
    console.log(props);
    return (
        <div className="friend-card">
            <h3>{props.friends.name}</h3>
            <p>age: {props.friends.age}</p>
            <p>email: {props.friends.email}</p>
        </div>
    )
}

export default FriendCard;
