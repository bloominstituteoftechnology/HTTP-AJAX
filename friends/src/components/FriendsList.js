import React from 'react';
import FriendsForm from './FriendsForm';
function FriendsList(props) {

return (
    <div>
    {props.items.map(friend => (
        <div
        key={friend.id}>

        <h2>{friend.name}</h2>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
            </div>
    ))}

    <FriendsForm {...props} />
    </div>
)
}



export default FriendsList;