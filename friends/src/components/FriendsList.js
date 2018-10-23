import React from 'react'

const FriendsList = (props) =>{

    return (
        <div>
            <ul>
                {props.friends.map(friend =>{
                    return <li key={friend.name}>{friend.name}</li>
                })}
            </ul>
        </div>
    )

}

export default FriendsList;