import React from 'react';

let Friend = props => {
    return(
        <div className="friend">
            <h2>Friend #{props.friend.id}: {props.friend.name}</h2>
            <p>Age: {props.friend.age} years old</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend;