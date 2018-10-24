import React from 'react';

const Friend = (props) => (
    <div>
        <ul>
            <li>Name: {props.friend[1]}</li>
            <li>Age: {props.friend[2]}</li>
            <li>Email: {props.friend[3]}</li>
        </ul>
    </div>
);

export default Friend;