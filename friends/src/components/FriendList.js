import React from 'react';
import Friend from './Friend';

const FriendList = props => {
    return(
        <div className="friend-list">
            {props.friendList.map(friend => <Friend friend={friend}/>)}
        </div>
    )
}

export default FriendList;