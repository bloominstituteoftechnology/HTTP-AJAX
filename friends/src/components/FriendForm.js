import React from 'react';

const FriendForm = (props) => {
    
   function handleSubmit(e) {
        e.preventDefault()
        props.addFriend()
   }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' onChange={props.handleChanges} value={props.friend.name} placeholder='Enter Name'/>
            <input type='number' name='age' onChange={props.handleChanges}  value={props.friend.age} placeholder='Age' />
            <input type='text' name='email' onChange={props.handleChanges}  value={props.friend.email} placeholder='Email' />
            <button>Enter</button>
        </form>
    )
}

export default FriendForm;