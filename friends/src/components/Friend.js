import React, { Component } from 'react';
import {Spring, Transition, animated} from 'react-spring';


const Friend = (props) => {

    return (
    {props.friends.map(friend => (
    <div>
    <h1>{friend.name}</h1>
    <p>{friend.age}</p>
    <p>{friend.email}</p>
    </div>

  ) )}
    )
}

export default Friend;