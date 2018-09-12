import React from 'react';

const Friend = props => {
    return (
        <div>
            <h1>Name: {props.friend.name}</h1>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    );
}

export default Friend;