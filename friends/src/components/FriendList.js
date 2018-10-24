import React from 'react';

import Friend from './Friend';

const FriendList = props =>  (
    <div>
        {props.friends.map(friend => {
            return <Friend key={friend[0]} friend={friend} />
        })}
    </div>
);


export default FriendList;