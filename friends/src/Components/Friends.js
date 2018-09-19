import React from 'react';
import Friend from './Friend';

function Friends(props) {
    return (
        <div className="FriendsDiv">
            {props.friendsData.map((friend) => (
                <Friend key={friend.id} friend={friend} />
                ))}
        </div>
    )
}

export default Friends;