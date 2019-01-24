import React from "react";

function FriendForm(props) {
    return (
        <form>
            <input
                type="text"
                name="name"
                value={props.newFriend.name}
                placeholder="Name"
                onChange={props.handleChanges}
            />
            <input
                type="text"
                name="age"
                value={props.newFriend.age}
                placeholder="Age"
                onChange={props.handleChanges}
            />
            <input
                type="text"
                name="email"
                value={props.newFriend.email}
                placeholder="Email"
                onChange={props.handleChanges}
            />
            <button onClick={props.addFriend}>Submit New Friend!</button>
        </form>
    )
}

export default FriendForm;