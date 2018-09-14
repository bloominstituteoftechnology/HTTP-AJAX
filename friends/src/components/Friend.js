import React from 'react';

const Friend = props => {

    return (
    <div className="friendContainer">
        <h2>{props.friend.name}</h2>
        <div>Age: {props.friend.age}</div>
        <div>Email: {props.friend.email}</div>
        <button className="button" onClick = { () => props.handleClick(props.friend) }>Edit</button>
    </div>);
};

export default Friend;