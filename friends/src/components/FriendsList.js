import React from 'react';
import Friends from './Friends';

const FriendsList = props => {
    return (
        <div>
            {props.friendsList.map(friend => ( <Friends key={friend.id} friend={friend} />))}
        </div>
    );
};
export default FriendsList;