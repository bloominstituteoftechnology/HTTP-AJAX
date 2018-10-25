import React from 'react';

//individual friend component

const Friend = (props) => {
    return (
        <div>
            {/* friend information */}
            <p>{props.friend.name} is {props.friend.age} years old. Their email address is <a href={`mailto:${props.friend.email}`}>{props.friend.email}</a>.</p>
            {/* delete friend button */}
            <button onClick={props.deleteFriend(props.friend.id)}>We're not friends anymore!</button>
        </div>
    )
}

export default Friend;