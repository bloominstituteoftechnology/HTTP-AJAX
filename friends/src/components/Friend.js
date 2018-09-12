import React from 'react';

const Friend = props => {
    return(
        <div className="friend">
            <h1>{props.friend.name}</h1>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}

export default Friend;