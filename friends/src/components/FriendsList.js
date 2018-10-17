import React from 'react';
import Friend from './Friends';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(item => <Friend friend={item} key={item.id} />)}
        </div>
    );
}

export default FriendsList;