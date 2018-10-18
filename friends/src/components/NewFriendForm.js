import React from "react";

const NewFriendForm = props => {
    return (
        <form onSubmit={props.addNewFriend}>
            <h1>Add a friend</h1>
            <input onChange={props.changeHandler} name="name" type="text" placeholder="Name" value={props.newFriend.name} required />
            <input onChange={props.changeHandler} name="age" type="number" placeholder="Age" value={props.newFriend.age} required />
            <input onChange={props.changeHandler} name="email" type="text" placeholder="Email" value={props.newFriend.email} required />
            <button type="submit">Submit New Friend</button>
        </form>
    );
}

export default NewFriendForm;