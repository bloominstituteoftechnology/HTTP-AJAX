import React, { Component } from 'react';

const Card = (props) => {
    return (
        <div>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default Card;