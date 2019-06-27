import React from 'react'

const Friend = props => {
    const id = props.match.params.id;
    const friend = props.friends.find(friend => `${friend.id}`=== id)
    // const returnHome = () => {
    //     props.history.push("/")
    // }

    function handleDelete() {
        props.deleteFriend(friend.id)
        props.history.push('/friends')
    }

    return (
        <div>
            <p>{friend.name}</p>

            <button onClick={(event) => {
                event.preventDefault()
                props.linkToUpdateFriendsList(friend.id)
            }}>Update</button>

            <button onClick={handleDelete}>Delete Friend</button>
        </div>
    )
}

export default Friend;