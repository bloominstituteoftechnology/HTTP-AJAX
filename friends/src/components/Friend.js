import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <h1>{props.friends.name}</h1>
            <h3>{props.friends.email}</h3>
            <p>{props.friends.name} is <strong>{props.friends.age}</strong> years old.</p>
        </div>
    )
}

export default Friend;