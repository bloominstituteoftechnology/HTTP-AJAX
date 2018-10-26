import React from 'react';

import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div>
            <div className='friend'>
                <div className='friendID'>ID</div>
                <div>Age</div>
                <div>Name</div>
                <div>Email</div>
            </div>
            {props.friends.map(friend => {
                return <Friend key={friend.name + friend.id} friend={friend} />
            })}
        </div>
    )
}

export default FriendsList;