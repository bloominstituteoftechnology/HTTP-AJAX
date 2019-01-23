import React from 'react'

const FriendsList = props => {
        return(
            <div>
                <p>Hi from FriendsList</p>
                {props.friends.map(friend => {
                return <li key={friend.id}>
                    <p onClick={() => routetoFriend(props, friend)}>{friend.name} {friend.age} {friend.email}</p>
                </li>
                })}      
            </div>
        )
}

function routetoFriend(props, friend) {
    props.history.push(`/friends/${friend.id}`)
}

export default FriendsList