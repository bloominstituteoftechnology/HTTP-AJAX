import React from 'react';
import '../App.css'

import Friend from './Friend';

const FriendsList = (props) => {
    return(
        <div className="friend-list">
            {props.friend.map(friend => {
                    return (
                        <Friend friend={friend}/>
                    );
                })}
        </div>
    )
    
}

export default FriendsList;