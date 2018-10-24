import React from 'react';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';

const FriendsPage = props => {
    return (
        <div className="friends-page">
            <FriendForm />
            <FriendsList />
        </div>
    )
}

export default FriendsPage;