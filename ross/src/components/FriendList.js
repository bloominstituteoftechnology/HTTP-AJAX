import React, { Component } from 'react';
import Friend from './Friend.js';

const FriendList = (props) =>{
    // console.log(props);
    
    return (
        props.friends.map((ross) => {
            // console.log(ross);
            return <Friend key={ross.id} ross={ross}/>
        })
        
    )
}

export default FriendList;