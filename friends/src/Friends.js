import React from 'react';
 function Friend(props) {
    return (
        <li>Name: {props.friend.name}, Age: {props.friend.age}, Email: {props.friend.email}</li>
    )
}
 export default Friend; 