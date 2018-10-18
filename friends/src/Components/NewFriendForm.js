import React from 'react';

const NewFriendForm = props => {
    return (
        <div>
            <form onSubmit = {props.addNewFriend}>
                <input onChange= {props.changeHandler} type = 'input' placeholder = 'name' name='name' />
                <input  onChange= {props.changeHandler} type = 'number' placeholder = 'age' name='age'/>
                <input  onChange= {props.changeHandler} type = 'email' placeholder = 'email' name='email'/>
                <button> Add New Friend</button>
                
            </form>
            
        </div> 
    )
}
export default NewFriendForm; 