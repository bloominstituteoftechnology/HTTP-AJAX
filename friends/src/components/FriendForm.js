import React from 'react'

function FriendForm(props) {

        return (
            <div>
            <form>
                <button onClick={props.addNewFriend}>Add Friend</button>
                <button onClick={(event) => props.editFriend(event, props.friend.id)}>Edit Friend</button>
                <input onChange={props.addHandler} value={props.friends.name} type="text" name="name" placeholder="Name"></input>
                <input onChange={props.addHandler} value={props.friends.age} type="number" name="age" placeholder="Age"></input>
                <input onChange={props.addHandler} value={props.friends.email} type="text" name="email" placeholder="Email"></input>
            </form>
        </div>
        )
    
}

export default FriendForm;