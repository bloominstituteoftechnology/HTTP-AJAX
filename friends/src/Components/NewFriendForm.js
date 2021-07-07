import React from 'react'; 

const NewFriendForm = props => {
    return (
        <div className = "form">
            <p>Enter a new Contact</p>
            <input onChange = {props.changeName} placeholder = "Name" minLength = "1" required name = "name" type = "text"/>
            <input onChange = {props.changeAge} placeholder = "Age" name = "age" type = "text" /> 
            <input onChange = {props.changeEmail} placeholder = "Email" name  = "email" type = "email" />
            <button onClick = {props.click} >Add Contact</button> 
        </div>
    )
}

export default NewFriendForm; 
