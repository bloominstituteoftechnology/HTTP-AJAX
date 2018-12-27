import React from 'react';

const FriendsList = props => (
    <div className="list">
        {props.friends.map(friend => (
            <div key={friend.id}>
                <p><span>Name:</span> {friend.name}</p>
                <p><span>Age:</span> {friend.age}</p>
                <p><span>Email:</span> {friend.email}</p>
                <span className="fas fa-times-circle delete" onClick={() => props.deleteFriend(friend.id)}></span>
            </div>
        ))}
    </div>
);

export default FriendsList;