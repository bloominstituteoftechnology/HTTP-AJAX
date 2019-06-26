import React from 'react';

const FriendList = (props) => {
    return (
        props.data.map( friend => {
            return (
                <h1>{friend.name}</h1>
            )
        })
    )
}

export default FriendList;