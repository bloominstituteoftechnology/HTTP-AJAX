import React from 'react'
import './friends.css'

const Friend = props => {
    return (
        <div className="friend">
           <ul>{props.friend.id} <strong>{props.friend.name}</strong> {props.friend.age} {props.friend.email}<button onClick={() => props.handleDelete(props.friend.id)}>Delete</button></ul>
        </div>
    )
}

export default Friend;