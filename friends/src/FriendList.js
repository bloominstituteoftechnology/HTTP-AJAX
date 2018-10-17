import React from 'react'
import Friend from './Friend'


const FriendList = (props) => {
    return (
        <div>
            {props.friends.map( friend => {
                return <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} id={friend.id} />
            })}
        </div>
    )
}

export default FriendList