import React from 'react';
import './friends.css';

function Friend(props) {
    return (
        <div className="card">
            <ul className="list">
                <li>{props.friend.name}</li>
                <li>{props.friend.age}</li>
                <li>{props.friend.email}</li>
            </ul>
        </div>
    )
}

export default Friend;