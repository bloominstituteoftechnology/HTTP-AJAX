import React from 'react';

import Friend from './Friend.js';

function FriendsList(props) {
    return (
        <div>
            {props.friends.map(friend => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    removeFriend={props.removeFriend}
                    handleChange={props.handleChange}    
                />
            ))}
        </div>
    );
}

export default FriendsList;