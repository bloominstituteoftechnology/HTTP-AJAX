import React from 'react';

const Friend = props => {
    console.log(props);
    return(
        <div className="friend-card">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Friend;