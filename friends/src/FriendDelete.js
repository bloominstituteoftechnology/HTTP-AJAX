import React from 'react';

function FriendDelete(props) {
    return (
        <div>
            <h2>1) Click on a Friend to Delete</h2>
            {props.friends.map(friend => 
            <li key={friend.id} onClick={() => {props.friendDelete(friend.id)}}>
                {friend.name}
            </li>
            )} 
        </div>
    )
}

export default FriendDelete;