import React from 'react'

export default function (props){
    const {friend} = props
    return (
        <div>
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Email:</strong><br />{friend.email}</p>
            <button onClick={event => event.preventDefault()}>
                Delete
            </button>
            <button onClick={event => event.preventDefault()}>
                Update
            </button>
        </div>
    )
}