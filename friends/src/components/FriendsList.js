import React from 'react'

const FriendsList = props => {
        return(
            <div className="list-wrapper">
                {props.friends.map(friend => {
                return <div className="card" key={friend.id}>
                    <p onClick={() => routetoFriend(props, friend)}>
                    {friend.name}<br/> {friend.age}<br/> {friend.email}</p>
                </div>
                })}      
            </div>
        )
}

function routetoFriend(props, friend) {
    props.history.push(`/friends/${friend.id}`)
}

export default FriendsList