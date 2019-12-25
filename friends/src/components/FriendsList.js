import React from 'react';

import './Friends.css'

export default function FriendsList(props) {
    return (
        <div>
            {props.friends.map(friend => {
                return(
                    <div key={friend.id} className='friendsWrapper'>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}