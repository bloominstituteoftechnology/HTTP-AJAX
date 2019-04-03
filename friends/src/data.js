import React, { Component } from 'react';
import axios from 'axios';


function Data(props) {
    
    return (
        <div className="App cards">
            {props.friends.map(friend => (
                <div className='friend-card' key ={friend.id}>
                    <h1>{friend.name}</h1>
                    <p><strong>Age:</strong> {friend.age}</p>
                    <p><strong>Email:</strong> {friend.email}</p>
                </div>
            ))}
        </div>
    );
}


export default Data;