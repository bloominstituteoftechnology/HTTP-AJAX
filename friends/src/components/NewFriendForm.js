import React from 'react';

const NewFriendForm = props => {
    return (
        <form onSubmit={props.addNewFriend}>
            <input name='name' type='text' placeholder="Name" value={props.newFriendName} onChange={props.handleNewFriendInput} />
            <input name='age' type='text' placeholder="Age" value={props.newFriendAge} onChange={props.handleNewFriendInput} />
            <input name='email' type='text' placeholder="Email" value={props.newFriendEmail} onChange={props.handleNewFriendInput} />
            <input type='submit'/>
        </form>
    )
}

export default NewFriendForm;