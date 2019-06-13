import React from 'react'
import Friend from './Friend'

const FriendList = ({ friends, deleteFriend, editFriend }) => {
    return (
        <div>
            {friends.map( friend => <Friend 
            key={friend.id} 
            {...friend} 
            deleteFriend={deleteFriend}
            editFriend={editFriend}
            />)}
        </div>
    )
}

export default FriendList
