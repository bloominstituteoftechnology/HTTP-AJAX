import React, { Component } from 'react';

function FriendsList(props) {
    return (
            <div>
              <span> Name: {props.name}</span>
               <span> Age: {props.age}</span>
               <span> Email: {props.email}</span>
             </div>
        )
    };
 export default FriendsList;
