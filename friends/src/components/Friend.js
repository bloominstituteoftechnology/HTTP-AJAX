import React from 'react';

const Friend = (props) =>{
    return(
        <ul>
            <li>{props.friend.name}</li>
            <li>Age: {props.friend.age}</li>
            <li>Email: {props.friend.email}</li>
        </ul>
    )
}

export default Friend