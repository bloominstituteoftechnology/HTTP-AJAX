import React from'react';

function FriendsList (props) {
    return (
        <div>
            <h1> Friends List </h1>
            <p className = 'friends-list'> {props.friends}</p>
        </div>
    )
}

export default FriendsList;