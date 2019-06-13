import React, { Component } from 'react';


import Friend from './Friend';

const Friends = props => {

    return (
    <div className = 'Friends'>
        {props.friends.map(friend => <Friend key={friend.name + friend.id} friend = {friend}/>)}
    </div>
    )
}

export default Friends;