import React from 'react'

const Friend = friend => {
    return (
        <div className="friend">
            <p>{friend.id}</p>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default Friend
