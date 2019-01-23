import React from 'react';

const Friends = props => {
    return(
        <>
            {props.friendsList.map(friend => {
                return (
                    <div>
                        <h1>{friend.name}</h1>
                        <ul>
                            <li>{friend.email}</li>
                            <li>{friend.age}</li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default Friends;