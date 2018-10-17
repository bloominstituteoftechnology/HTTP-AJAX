import React from 'react';

let Friend = props => {
    return(
        <div className="friend">
            <h2>Hi, my name is {props.friend.name}</h2>
            <p>I am {props.friend.age} years old. My email is {props.friend.email}.</p>
        </div>
    )
}

export default Friend;