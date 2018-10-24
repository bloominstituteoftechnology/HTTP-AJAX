import React from 'react';
import './Friends.css';
import FriendsList from './FriendsList';

const FriendsPage = props => {
    return (
        <div className="friends-page">
            <FriendsList />
        </div>
    )
}

export default FriendsPage;