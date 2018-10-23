import React from 'react';

const Friend = (props) => {
    return(
        <div>
            <h1>My name is {props.friend.name}</h1>
            <h3>I am {props.friend.age} years old.</h3>
            <h3>You can contact me at {props.friend.email}</h3>
        </div>
    )
};

export default Friend;
