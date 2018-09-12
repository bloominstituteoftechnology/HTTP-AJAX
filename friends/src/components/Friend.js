import React from 'react';

const Friend = props => {
    return (
    <div className="friendContainer">
        <h2>{props.friend.name}</h2>
        <div>Age: {props.friend.age}</div>
        <div>Email: {props.friend.email}</div>
    </div>);
};

export default Friend;