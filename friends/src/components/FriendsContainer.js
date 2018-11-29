import React, { Component } from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendsContainer = props => {
const friendsList = props.friends.map(friend => {
        return (
            <Link to={`/friends/${friend.id}`} key={friend.id} >
                <Friend  friend={friend}/>
            </Link>
        );
    });

    
    return (
        <div className="friends-wrapper">
            {friendsList}
        </div>
        
    );
}

export default FriendsContainer;