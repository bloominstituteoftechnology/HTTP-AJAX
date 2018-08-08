import React from 'react';
import './AddFriend.css'

const AddFriend = props => {
    return (
        <form className = "add-friend-form"> 
        <span className = "add-friend-prompt">Add Friend:</span>
            <input type = 'text' placeholder='name' name = 'name' />
            <input type = 'text' placeholder='age' age = 'age' />
            <input type = 'text' placeholder='email' email = 'email' />
        </form>
    );
}

export default AddFriend;