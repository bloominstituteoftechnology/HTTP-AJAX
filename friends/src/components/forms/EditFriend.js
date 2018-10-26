import React from 'react';

const EditFriend = (props) => {
    function editClicked(e) {
        e.preventDefault();
        props.editFriendHandler(props.friend.id);
    }
    return (
        <>
        <form>
            <div>
                <label>Edit friend name:</label>
                <input type='text' onChange={props.onNameChange} value={props.friendName}/>
            </div>
            <div>
                <label>Edit friend email:</label>
                <input type='text' onChange={props.onEmailChange} value={props.friendEmail}/>
            </div>
            <div>
                <label>Edit friend age</label>
                <input type='text' onChange={props.onAgeChange} value={props.friendAge}/>
            </div>
            <div>
                <button onClick={editClicked}>Edit friend</button>
            </div>
        </form>
        </>
    )
}

export default EditFriend;