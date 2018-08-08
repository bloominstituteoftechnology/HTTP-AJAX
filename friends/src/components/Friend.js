import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <h1>Friend #{props.person.id}</h1>
            <p>Name: {props.person.name}</p>
            <p>Age: {props.person.age}</p>
            <p>Email: {props.person.email}</p>
        </div>
    )
}

export default Friend;