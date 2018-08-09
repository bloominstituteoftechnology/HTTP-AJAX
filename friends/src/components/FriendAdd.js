import React from 'react'

const FriendAdd = props => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <span>Name:</span>
            <input onChange = {props.handleName} value = {props.name} />
            <span>Age:</span>
            <input onChange = {props.handleAge} value = {props.age} />
            <span>Email:</span>
            <input onChange = {props.handleEmail} value = {props.email} />
            <button>Add Friend</button>
        </form> 
    )
}

export default FriendAdd