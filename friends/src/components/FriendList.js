import React from 'react';
import Friend from './Friend';

let FriendList = props => {
    return (
        <div className="friendlist">
            {props.friends.map((friend, i) => <Friend key={i} friend={friend}/>)}
        </div>
    )
}

export default FriendList;