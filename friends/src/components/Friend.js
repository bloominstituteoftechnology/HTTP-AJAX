import React from 'react';

const Friend = (props) => {
    return (
        <div className="friend-div">
            <h1 className="friend-title">Friend #{props.person.id}</h1>
            <p><span>Name:</span> {props.person.name}</p>
            <p><span>Age:</span> {props.person.age}</p>
            <p><span>Email:</span> {props.person.email}</p>
        </div>
    )
}

export default Friend;