import React from 'react';

const EditFriend = props => {
    return (
        <form onSubmit={props.saveEditFriend}>
            <input
                type='text'
                placeholder='Enter New Name'
                name='name'
                onChange={props.editFriendHandler}
                value={props.friend.name}
            />
            <input
                type='text'
                placeholder='Enter New Age'
                name='age'
                onChange={props.editFriendHandler}
                value={props.friend.age}
            />
            <input
                type='text'
                placeholder='Enter New Email'
                name='email'
                onChange={props.editFriendHandler}
                value={props.friend.email}
            />
            
            <button type='submit'>Save The Change</button>
        </form>
    )
}

export default EditFriend;