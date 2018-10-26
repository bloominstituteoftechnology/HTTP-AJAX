import React from 'react';

const Friend = (props) => (
    <div>
        <ul>
            <li>Name: {props.friend[1]}</li>
            <li>Age: {props.friend[2]}</li>
            <li>Email: {props.friend[3]}</li>
            <button onClick={(e) => props.youAreNotMyFriend(e, props.friend[0])}>Delete</button>
            <button onClick={(e) => props.passProperties(e, props.friend[0], props.friend[1], props.friend[2], props.friend[3], props.friend[4])}>Edit</button>
        </ul>
    </div>
);

export default Friend;