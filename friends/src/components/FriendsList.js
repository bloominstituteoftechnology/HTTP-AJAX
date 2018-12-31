import React from 'react';
import Friend from './Friend';

const FriendsList = props => (
    <div className="list">
        {props.friends.map(friend => (
            <Friend name={friend.name}
                email={friend.email}
                id={friend.id}
                key={friend.id}
                deleteFriend={props.deleteFriend}
            />
        ))}
    </div>
);

export default FriendsList;