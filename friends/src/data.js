import React, { Component } from 'react';
import axios from 'axios';


function Data(props) {
    
    return (
        <div className="App cards">
        <h1 className="mainTitle">Lambda Atlantians</h1>
            {props.friends.map(friend => (
                <div className='friendCard' key ={friend.id}>
                    <h1 className='titleOfCard'>{friend.name}</h1>
                    <p><strong>Age:</strong> {friend.age}</p>
                    <p><strong>Email:</strong> {friend.email}</p>
                </div>
            ))}
        </div>
    );
}


export default Data;