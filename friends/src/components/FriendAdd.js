import React from 'react'

const FriendAdd = props => {
    return(
        <form onSubmit = {props.handleSubmit} className="add">
            <div>
                <span>Name:</span>
                <input onChange = {props.handleName} value = {props.name} />
                <span>Age:</span>
                <input onChange = {props.handleAge} value = {props.age} />
                <span>Email:</span>
                <input onChange = {props.handleEmail} value = {props.email} /> 
            </div>
            
            <div>
                <button>Add Friend</button>
            </div>
            
        </form> 
    )
}

export default FriendAdd