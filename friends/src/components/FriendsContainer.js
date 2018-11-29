import React, { Component } from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';
import '../App.css'; 

const FriendsContainer = props => {
const friendsList = props.friends.map(friend => {
        return (
            <div className="friends-container">
                <Link to={`/friends/${friend.id}`} key={friend.id} >
                    <Friend  friend={friend}/>
                </Link>
                <button className="btn-delete" onClick={() => props.deleteFriend(friend.id)}>Get Rekt</button>
            </div>
        );
    });

    
    return (
        <div className="friends-wrapper">
            {friendsList}
        </div>
        
    );
}

export default FriendsContainer;