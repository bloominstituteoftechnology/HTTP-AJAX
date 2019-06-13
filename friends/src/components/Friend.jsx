import React from 'react'

const Friend = props => {
    return (
        <div className="friend">
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <button onClick={(e) => props.deleteFriend(props.id) }>Delete</button>
            <button onClick={() => props.editFriend(props.id) }>Edit</button>
        </div>
    )
}

export default Friend
