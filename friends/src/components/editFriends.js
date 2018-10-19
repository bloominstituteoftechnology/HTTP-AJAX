import React from 'react';


const EditFriends = props => {
    return (
        <form className='edit-friend-form'>
            <input
                placeholder={props.friend.name}
                name='editName'
                type='text'
                value={props.name}
                onChange={props.editFriendHandler}
            />
            <input
                placeholder={props.friend.age}
                name='editAge'
                type='text'
                value={props.editAge}
                onChange={props.editFriendHandler}
            />
            <input
                placeholder={props.friend.email}
                name='editEmail'
                type='text'
                value={props.editEmail}
                onChange={props.editFriendHandler}
            />
            <button onClick={props.saveEdits}>Save changes</button>
        </form>
    )
}








export default EditFriends;