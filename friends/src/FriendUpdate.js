import React from 'react';
import FriendToUpdate from './FriendToUpdate';

function FriendUpdate(props) {
    return (
        <div>
            <h2>1) Click on a Friend to Update</h2>
            {props.friends.map(friend => 
                <li key={friend.id} onClick={() => props.history.push(`/friend-update/${friend.id}`)}>
                {friend.name}
                </li>
            )} 
        </div>
    )
}

export default FriendUpdate;