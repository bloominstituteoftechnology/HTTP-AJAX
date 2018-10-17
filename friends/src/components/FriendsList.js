import React from 'react'


const FriendsList = props =>{
    return (
        <div>
            {props.friends.map(friend => <h4 key={friend.id}>{friend.name}</h4>)}


        </div>

    )
}

export default FriendsList