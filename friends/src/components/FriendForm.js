import React from 'react';

const FriendForm = props => {
    return (
        <form onSubmit={props.handleSubmit} >
            Add Friend!
            <input type="text" name="name" onChange={props.handleTextInput} value={props.name} placeholder="Add name..." />
            <input type="text" name="age" onChange={props.handleTextInput} value={props.age} placeholder="Add age..." />
            <input type="text" name="email" onChange={props.handleTextInput} value={props.email} placeholder="Add email..." />
            <button type="submit" onClick={props.handleSubmit} >Add Friend</button>
        </form>
    );
};

export default FriendForm;