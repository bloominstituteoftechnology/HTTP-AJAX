import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <p>{props.friend.name} is {props.friend.age} years old. Their email address is {props.friend.email}.</p>
            <button onClick={props.deleteFriend(props.friend.id)}>We're not friends anymore!</button>
        </div>
    )
}

export default Friend;