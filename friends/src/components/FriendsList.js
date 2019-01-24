import React from 'react';
import Friend from './Friend';

import { Link } from 'react-router-dom';

const FriendList = props => {

    return (
        <div className="friends-list">
            {props.friends.map(friend => (
                <Link key={friend.id} to={`friends/${friend.id}`}>
                    <Friend friend={friend} name={friend.name} email={friend.email} age={friend.age}/>
                </Link>
            ))}
        </div>
    )
    
}

export default FriendList;
