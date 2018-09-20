import React from 'react';
import './Friend.css';

function Friend(props) {
    console.log(props.friend)
    return (
        <div className="Friend">
            <h1>{props.friend.name}</h1>
            <p><em>Age :</em> {props.friend.age}</p>
            <p><em>Contact :</em> {props.friend.email}</p>
        </div>
    )
}

export default Friend;