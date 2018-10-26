import React from 'react';
import {Link} from 'react-router-dom';

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
                return (
                    <Link key={friend.name + friend.id} to={`/friend/${friend.id}`}>
                        <Friend key={friend.name + friend.id} friend={friend} />
                    </Link>
                )
            })}
        </div>
    )
}

export default FriendsList;