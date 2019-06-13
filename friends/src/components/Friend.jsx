import React from 'react'

const Friend = props => {
    return (
        <div className="friend">
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
            <p onClick={(e) => props.deleteFriend(props.id) }>Delete</p>
        </div>
    )
}

export default Friend
