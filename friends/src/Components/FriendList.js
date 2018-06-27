import React from 'react';
import Friends from './Friends';

const FriendList = (props) => {
    return (
        <div>
            {props.friends.map( friend  => {
                return <Friends friend = { friend } key={ friend.id } />
            })}
        </div>
    );
};

export default FriendList;