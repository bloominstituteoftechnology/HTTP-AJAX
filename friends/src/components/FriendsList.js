import React from 'react';
import Friend from './Friend';
//import axios from 'axios';

const FriendsList = props => {
    return (
    <div className="friends-list">
        {props.friends.map(friend => {
            return <Friend key={friend.id} friend={friend} />
        })}
    </div>
    )
}

export default FriendsList;