import React from 'react';
import './Friends.css';

const FriendsForm = props => {
    return (
        <div>
            <form className = 'new-friend-form' onSubmit = {props.addFriend}>
                <h4>Add New Friend</h4>
                <input type='text' placeholder  = 'name' name='newName' value = {props.state.newName} onChange = {props.handleInput}></input>
                <input type = 'number' placeholder = 'age' name = 'newAge' value = {props.state.newAge} onChange = {props.handleInput}></input>
                <input type = 'email' placeholder = 'email' name = 'newEmail' value = {props.state.newEmail} onChange = {props.handleInput}></input>
                <button type = 'submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendsForm;