import React from 'react';

const friends = (props) => {
    return (
        <div>
        <p> {props.name} </p>
        <p> {props.age} </p>
        <p> {props.eMail} </p>
        </div>
    )
}

export default friends;