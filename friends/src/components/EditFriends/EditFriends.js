import React from 'react';
import { EditInputField, EditButtons } from '../ReusableComponents/FriendsCard';

const EditFriends = props => {
    return (
        <form onSubmit={event => event.preventDefault()}>
            <EditInputField value={props.name} onChange={props.handleInput} type='text' placeholder='name' name='name' />
            <EditInputField value={props.age} onChange={props.handleInput} type='text' placeholder='age' name='age' />
            <EditInputField value={props.email} onChange={props.handleInput} type='text' placeholder='email' name='email' />

            <EditButtons color='primary' onClick={props.onClick}>Save</EditButtons>
            <EditButtons color='danger' onClick={props.deleteFriend}>Delete</EditButtons>
        </form>
    );
}

export default EditFriends;