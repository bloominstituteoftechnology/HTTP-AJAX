import React, { Component } from 'react';

const Friend = props => {

    return (
        <div className="friend">
            <h2>{props.friend.name}</h2>
            <h4>{props.friend.age}</h4>
            <p>{props.friend.email}</p>
        </div>
        
    );
}

export default Friend;