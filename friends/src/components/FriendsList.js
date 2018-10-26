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
                    <Link key={friend.name + friend.id} to={`/friends/`}>
                        <Friend key={friend.name + friend.id} friend={friend} />
                        <button onClick={() => props.deleteFriend(friend.id)}>X</button>
                    </Link>
                )
            })}
        </div>
    )
}

export default FriendsList;