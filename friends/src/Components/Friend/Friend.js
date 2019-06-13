import React from 'react';
import { Link } from 'react-router-dom';  
import './Friend.css';

function Friend(props) {
    console.log(props.friend)
    return (
        <div className="Friend">
            <Link to={`/friends/${props.friend.id}`}><h1>{props.friend.name}</h1></Link>
            <p><em>Age :</em> {props.friend.age}</p>
            <p><em>Contact :</em> {props.friend.email}</p>
        </div>
    )
}

export default Friend;