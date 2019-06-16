import React from 'react';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return <div key={friend.id}>{friend.name} -- {friend.age} -- 
                {friend.email} -- <button onClick={() => props.handleDelete(friend.id)}>delete noob</button>
                </div>
            })}
        </div>
    );
}
 
export default FriendsList;