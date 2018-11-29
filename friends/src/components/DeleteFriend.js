import React from 'react'

function DeleteFriend(props) {
    return (
        <button onClick={() => props.removeFriend(props.id)}>Delete Friend</button>
    )
}

export default DeleteFriend;