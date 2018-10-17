import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';
import {Link} from 'react-router-dom';


const FriendCard = (props) => {

    return (
    <div className="friends-list">
    
    <h1>{props.friend.name}</h1>
    <p>{props.friend.age}</p>
    <p>{props.friend.email}</p>

    </div>

    )
}

export default FriendCard;