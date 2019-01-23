import React, { Fragment } from 'react'

const FriendForm = props => {
    return(
        <Fragment>
            <h1>Add new Friend</h1>
            <form>
                <input 
                    onChange={props.handleChange} 
                    name="name" 
                    value={props.friend.name} 
                    type="text" 
                    placeholder="Name" 
                />
                <input 
                    onChange={props.handleChange} 
                    name="age" 
                    value={props.friend.age} 
                    type="number" 
                    placeholder="Age" 
                />
                <input 
                    onChange={props.handleChange} 
                    name="email" 
                    value={props.friend.email} 
                    type="email" 
                    placeholder="Email" 
                />                     
            </form>
            <button onClick={props.addNewFriend}>Add Friend</button>  
        </Fragment>
    )
}

export default FriendForm