import React from 'react';
import FriendsForm from './FriendsForm';
import shortid from 'shortid'

const FriendsList = props => {
    return (
        <>
            <FriendsForm />
            <ul>
                {props.friends.map(friend => <li key={shortid.generate()}>{friend.name} | {friend.age} | {friend.email}</li>)}
            </ul>
        </>
    );
};

export default FriendsList;