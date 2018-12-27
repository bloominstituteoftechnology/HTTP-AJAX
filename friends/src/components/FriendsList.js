import React from 'react';

const FriendsList = props => (
    <div className="list">
        {props.friends.map(friend => (
            <div key={friend.id}>
                <p><span>Name:</span> {friend.name}</p>
                <p><span>Age:</span> {friend.age}</p>
                <p><span>Email:</span> {friend.email}</p>
            </div>
        ))}
    </div>
);

export default FriendsList;