import React from 'react';

const FriendForm = props => {
    return (
        <form onSubmit={props.addNewFriend}>
            <input type="text"
                    placeholder='Enter Friend'
                    onChange={props.handleNewFriend}
                    value={props.newFriendValue} /> 
            <button type='submit'>Submit</button>       
        </form>
    );
}

export default FriendForm;