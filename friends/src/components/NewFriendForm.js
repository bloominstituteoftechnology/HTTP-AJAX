import React from "react";

const NewFriendForm = props => {
    return (
        <form onSubmit={props.newFriend}>
            <h1>Add a friend</h1>
            <input onChange={props.nameChangeHandler} name="name" type="text" placeholder="Name" value={props.newName} required />
            <input onChange={props.ageChangeHandler} name="age" type="text" placeholder="Age" value={props.newAge} required />
            <input onChange={props.emailChangeHandler} name="email" type="text" placeholder="Email" value={props.newEmail} required />
            <button type="submit">Submit New Friend</button>
        </form>
    );
}

export default NewFriendForm;