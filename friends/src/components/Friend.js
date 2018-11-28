import React from 'react';

function Friend(props) {
    return (
        <div>
            <h2>Name: {props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;