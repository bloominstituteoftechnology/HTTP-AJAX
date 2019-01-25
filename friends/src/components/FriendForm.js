import React from 'react'

const FriendForm = props => {
    function handleSubmit() { 
        props.isUpdating ? props.updateFriend(props.friend.id) : props.addNewFriend()
    }
    return(
        <div className="form-wrapper">
            <h2>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</h2>
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
            
            <button onClick={handleSubmit}>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</button>    
        </div>
    )
}

export default FriendForm