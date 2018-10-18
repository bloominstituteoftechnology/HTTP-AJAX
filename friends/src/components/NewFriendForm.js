import React from 'react';

const NewFriendForm = (props) => {
    return(
        <form>
            <input
                type="text"
                placeholder="name"
                onChange={props.changeHandler}
                name="name"
                value={props.newName} />

            <input
                type="text"
                placeholder="age"
                onChange={props.changeHandler}
                name="age"
                value={props.newAge} />

            <input
                type="text"
                placeholder="email"
                onChange={props.changeHandler}
                name="email"
                value={props.newEmail} />

            <button onClick={props.addFriend}>Add new friend</button>
        </form>
    );
}

export default NewFriendForm;