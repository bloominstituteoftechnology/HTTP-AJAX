import React from 'react';

const DisplayFriends = (props) => {
    return (
        <ul>
            {props.friends.map((friend) => <li key={friend.id}>{friend.name}</li>)}
        </ul>
    )
}

export default DisplayFriends; 