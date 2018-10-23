import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map (friend => {
                return (
                    <Friend key={friend.age} friend={friend} />
                    // trying not to use index!
                )
            })}
        </div>
    )
}

export default FriendsList;