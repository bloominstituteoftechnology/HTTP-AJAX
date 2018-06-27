import React from 'react';

const EditFriends = props => {
    return (
        <form onSubmit={event => event.preventDefault()}>
            <input value={props.name} onChange={props.handleInput} type='text' placeholder='name' name='name' />
            <input value={props.age} onChange={props.handleInput} type='text' placeholder='age' name='age' />
            <input value={props.email} onChange={props.handleInput} type='text' placeholder='email' name='email' />
            <button onClick={props.onClick}>Save</button>
            <button onClick={props.deleteFriend}>Delete</button>
        </form>
    );
}

export default EditFriends;