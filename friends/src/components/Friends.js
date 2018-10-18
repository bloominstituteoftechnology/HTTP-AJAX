import React from 'react';

const Friends = props => {
    return (
        <p>
            {props.friend.name} | {props.friend.age} | {props.friend.email}
        </p>
    )
}
 
export default Friends;