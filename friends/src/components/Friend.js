import React from 'react';

const Friend = (props) => {
    const friend = props.friends.find(friend => Number(friend.id) === Number(props.match.params.id))
    const newFriend = {...friend}
    // const id = props.match.params.id

    return (
        <div>
            <h1>{newFriend.name}</h1>
            <h3>{newFriend.email}</h3>
            <p>{newFriend.name} is <strong>{newFriend.age}</strong> years old.</p>
        </div>
    )
}

export default Friend;