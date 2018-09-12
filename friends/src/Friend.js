import React from 'react';

const Friend = props => {
    return (
        <li>
            <h1>Name: {props.friend.name}</h1>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </li>
    );
}

export default Friend;