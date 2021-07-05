import React from 'react';

const Friend = props => {
    return (
        <div className="friend">
            <h1>{props.friend.name}</h1>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}



export default Friend;