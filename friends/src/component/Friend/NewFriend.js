import React from 'react';

const NewFriend = props => {
    return(
    <form onSubmit={props.newFriend}>
        <input name="name" type="text" placeholder='name' onChange={props.change} />
        <input name="age" type="age" placeholder='age' onChange={props.change} />
        <input name="email" type="email" placeholder='email' onChange={props.change} />
        <button>Save</button>
    </form>
    )
}

export default NewFriend;