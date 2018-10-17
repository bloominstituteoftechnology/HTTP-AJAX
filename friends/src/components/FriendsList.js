import React from 'react';

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
    </div>
)
}



export default FriendsList;