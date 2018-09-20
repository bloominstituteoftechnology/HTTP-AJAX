import React from 'react';
import Friends from './Friends';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => ( <Friends key={friend.id} friend={friend} />))}
        </div>
    );
};
export default FriendsList;