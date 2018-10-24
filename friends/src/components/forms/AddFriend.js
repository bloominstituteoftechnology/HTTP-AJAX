import React from 'react';

const AddFriend = (props) => {
    return (
        <>
        <form>
            <div>
                <label>New friend name:</label>
                <input type='text' onChange={props.onNameChange} value={props.friendName}/>
            </div>
            <div>
                <label>New friend email:</label>
                <input type='text' onChange={props.onEmailChange} value={props.friendEmail}/>
            </div>
            <div>
                <button onClick={props.addFriend}>Add new friend</button>
            </div>
        </form>
        </>
    )
}

export default AddFriend