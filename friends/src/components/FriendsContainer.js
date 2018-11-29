import React, { Component } from 'react';
import Friend from './Friend';

const FriendsContainer = props => {
const friendsList = props.friends.map(friend => <Friend key={friend.id} friend={friend}/>);
    return (
        <div className="friends-wrapper">
            {friendsList}
        </div>
        
    );
}

export default FriendsContainer;