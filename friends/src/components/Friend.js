import React from 'react'
import { Route, Link } from 'react-router-dom'

const Friend = props => {
    const id = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}`=== id)
    const returnHome = () => {
        props.history.push("/")
    }

    return (
        <div>
            <h2>Hi from Friend</h2>
            <p>{friend.name}</p>
            <button onClick={returnHome}>Home</button>
            <button onClick={props.deleteFriend}>Delete Friend</button>
        </div>
    )
}

export default Friend;