import React from 'react';
// import { prependOnceListener } from 'cluster';

function FriendsForm(props){
    return(
    <form className = "friends-form">
        <input 
        type = "text" 
        name = "id" 
        placeholder = "id"
        onChange = {props.changeHandler}
        value = {props.friend.id}
        />
        <input 
        type = "text" 
        name = "name" 
        placeholder = "name"
        onChange = {props.changeHandler}
        value = {props.friend.name}
        />
        <input 
        type = "text" 
        name = "age" 
        placeholder = "age"
        onChange = {props.changeHandler}
        value = {props.friend.age}
        />
        <input 
        type = "text" 
        name = "email" 
        placeholder = "email"
        onChange = {props.changeHandler}
        value = {props.friend.email}
        />
        <button onClick={props.addNewItem}>
          Add Friend
        </button>
    </form>        
    )

}

export default FriendsForm;