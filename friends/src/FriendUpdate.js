import React from 'react';
import FriendToUpdate from './FriendToUpdate';

function FriendUpdate(props) {
    return (
        <div>
            <h2>1) Click on a Friend to Update</h2>
            {props.friends.map(friend => 
                <FriendToUpdate key={friend.id} friend={friend} onClick={() => props.history.push(`/friend-update/${friend.id}`)}/>
            )} 
        </div>
    )
}

export default FriendUpdate;