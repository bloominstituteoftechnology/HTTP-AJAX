import React from 'react';

const FriendList = (props) => {
        return (
            <div className="friends">
            {props.data.map( friend => {
                return (
                    <h1>{friend.name}</h1>
                )
            })}
            </div>
    )
}

export default FriendList;