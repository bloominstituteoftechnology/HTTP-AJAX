import React from 'react'
import Friend from './Friend'

const FriendList = ({ friends }) => {
    return (
        <div>
            {friends.map( friend => <Friend key={friend.id} {...friend} />)}
        </div>
    )
}

export default FriendList
