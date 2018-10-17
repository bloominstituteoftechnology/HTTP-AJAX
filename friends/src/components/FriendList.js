import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';
import {Link} from 'react-router-dom';


const FriendList = (props) => {

    return (
    <div className="friends-list">
    {props.friends.map(friend => (
    <div>
    <Link to={`/friends/${friend.id}`}><h1>{friend.name}</h1></Link>
    <p>{friend.age}</p>
    <p>{friend.email}</p>
    </div>

  ) )}
    </div>

    )
}

export default FriendList;