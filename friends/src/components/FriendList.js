import React from 'react';
import Friend from './Friend';

const FriendList = props => {
    return(
        <div className="friend-list">
            {props.friendList.map( friend => <Friend key={friend.name} friend={friend}/>)}
        </div>
    )
}

export default FriendList;