import React, {Component} from 'react';

import axios from 'axios';
import './Friends.css';
import NewFriendForm from './NewFriendForm.js';


const FriendsList = props => {
    return(
        <div className='friends-list'>
            {props.friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <p>Name: {friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
        
    );


   
}

export default FriendsList;