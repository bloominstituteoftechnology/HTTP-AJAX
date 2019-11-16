import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <FriendCard friend={friend}
                            key={friend.id} />
                );
            })}
        </div>
    );
};


export default FriendsList;