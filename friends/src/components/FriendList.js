import React from 'react';
import Friend from './Friend';

const FriendList = ({friends, updateFriend, deleteFriend}) => {
    return (
        <div>
            {friends.map(friend => <Friend friend={friend} updateFriend={updateFriend} deleteFriend={deleteFriend} key={friend.id} />)}
        </div>
    );
}

export default FriendList;
