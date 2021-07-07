import React from 'react';

const FriendForm = (props) => {
    function handleSubmit(e) {
        e.preventDefault();
        if(props.isUpdating){
            props.updateFriend()
        } else {
            props.addFriend()
        }
    }

    return (
        <>
        <h2>{props.isUpdating ? 'Update Friend' : 'Add Friend'}</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' onChange={props.handleChanges} value={props.friend.name}/>
            <input type='number' name='age' placeholder='Age' onChange={props.handleChanges} value={props.friend.age}/>
            <input type='text' name='email' placeholder='Email' onChange={props.handleChanges} value={props.friend.email}/>
            <button type='submit'>{props.isUpdating ? 'Update Friend' : 'Add Friend'}</button>
        </form>
        </>
    )
}

export default FriendForm;