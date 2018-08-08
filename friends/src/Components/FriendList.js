import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDom from "react-dom";


const FriendList = props => {
    return (
        <div className="friendsWrapper" >
            {props.friends.map(friend => (
                <div className="friendWrap" >
                   <div>name: {friend.name}</div>  
                   <div>age: {friend.age}</div>
                   <div>email: {friend.email}</div>
                </div>
            )
        ) }
        </div>
    );
};

export default FriendList;