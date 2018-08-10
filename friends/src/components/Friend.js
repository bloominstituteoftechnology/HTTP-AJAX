import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    let realIndex = props.array.findIndex(element => element.id === props.person.id)
    return (
        <div className="friend-div" onClick={() => window.location.assign(`/friends/${realIndex+1}`)}>
            <h1 className="friend-title">Friend #{props.person.id}</h1>
            <p><span>Name:</span> {props.person.name}</p>
            <p><span>Age:</span> {props.person.age}</p>
            <p><span>Email:</span> {props.person.email}</p>
        </div>
    )
}

export default Friend;