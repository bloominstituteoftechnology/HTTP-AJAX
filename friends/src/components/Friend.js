import React from 'react';
import './Friend.css';

const Friend = (props) =>{
    return(
        <ul className='singleFriend'>
            <li className='friendName'>{props.friend.name}</li>
            <li>Age: {props.friend.age}</li>
            <li>Email: {props.friend.email}</li>
            <li className='deleteButton' onClick={props.deleteHandler(props.friend.id)}>Delete</li>
        </ul>
    )
}

export default Friend