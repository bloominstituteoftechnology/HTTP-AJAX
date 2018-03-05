import React from 'react';
import './friends.css';

function Friend(props) {
    return (
        <div className="card">
            <ul className="list">
                <li>Name: {props.friend.name}</li>
                <li>Age: {props.friend.age}</li>
                <li>Email: {props.friend.email}</li>
            </ul>
            <button onClick={() => {props.remove(props.friend.id);}}>Delete</button>
        </div>
    )
}

export default Friend;