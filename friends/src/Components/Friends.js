import React from 'react';
import Friend from './Friend';

import './Friend.css';

function Friends(props) {
    return (
        <div className="Friends">
            {props.friendsData.map((friend) => (
                <Friend key={friend.id} friend={friend} />
                ))}
        </div>
    )
}

export default Friends;