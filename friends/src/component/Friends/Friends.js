import React from 'react';

const Friends = props => {
    return(
        <>
            {props.friendsList.map(friend => {
                return (
                    <div key={friend.id}>
                        <h1>{friend.name}</h1>
                        <ul>
                            <li>{friend.email}</li>
                            <li>{friend.age}</li>
                        </ul>
                        <button onClick={e => props.deleteFriend(e, friend.id)}>x</button>
                        <button onClick={e => props.updateFriend(e,friend)}>Update</button>
                    </div>
                )
            })}
        </>
    )
}

export default Friends;