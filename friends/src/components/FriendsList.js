import React from 'react';

function FriendsList (props) {
    return (
        <div className = 'friendList-wrapper'>
            {props.friends.map(friend => {
                return (
                <div>
                <ul>
                   <li>Name: {friend.name}</li>
                   <li>Age: {friend.age}</li>
                   <li>Email: {friend.email}</li>
               </ul>
               </div>
                )
            })}
        </div>
    )
}

export default FriendsList;