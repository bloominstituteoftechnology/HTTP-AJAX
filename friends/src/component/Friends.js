import React from 'react';

const Friends = (props) => {
    return (
        <div>
            <h2>Hello.  My name is {props.friend.name}</h2>
            <h4>My email is {props.friend.email}.</h4>
            <h4>I am {props.friend.age} years old.</h4>
        </div>
    )
}

export default Friends;