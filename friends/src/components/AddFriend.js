import React from 'react';
import './AddFriend.css'

const AddFriend = props => {
    console.log(props)
    return (
        <form className = "add-friend-form"> 
        <span className = "add-friend-prompt">Add Friend:</span>
        {/* important note use name = 'age' since target.name=target.value, 'name' is standard syntax */}
            <input value = {props.name} onChange={props.inputHandler} type = 'text' placeholder='name' name = 'name' />
            <input value = {props.age} onChange={props.inputHandler} type = 'text' placeholder='age' name = 'age' />
            <input value = {props.email} onChange={props.inputHandler} type = 'text' placeholder='email' name = 'email' />
            <button onClick = {props.onClick}>Submit</button>
        </form>
    );
}

export default AddFriend;