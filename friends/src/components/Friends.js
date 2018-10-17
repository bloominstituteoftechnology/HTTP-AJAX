import React from 'react';

const Friends = props => {
    return (
        props.friends.map(friend => {
            <p>{friend.name}</p>
        })
    );
}
 
export default Friends;