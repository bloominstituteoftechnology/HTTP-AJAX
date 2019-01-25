import React from "react";

function FriendForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        if (props.isUpdating) {
            props.updateFriend()
         } else {
            props.addFriend()
         }
    }
    return (
        <div>
        <h2>{props.isUpdating ? "Update friend:" : "Add new friend;"}</h2>
        <form>
            <input
                type="text"
                name="name"
                value={props.friend.name}
                placeholder="Name"
                onChange={props.handleChanges}
            />
            <input
                type="text"
                name="age"
                value={props.friend.age}
                placeholder="Age"
                onChange={props.handleChanges}
            />
            <input
                type="text"
                name="email"
                value={props.friend.email}
                placeholder="Email"
                onChange={props.handleChanges}
            />
            <button onClick={handleSubmit}>
                {props.isUpdating ? "Update Friend" : "Add New Friend!"}
            </button>
        </form>
        </div>
    )
}

export default FriendForm;