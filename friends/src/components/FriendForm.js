import React from 'react';
import { StyledInput, StyledButton } from '../Style/Input';

const FriendForm = ({friend, changeHandler, addNewFriend, updateFriend}) => {
    return (
        <form onSubmit={addNewFriend} className="container form">
            <div className="form-inputs">
                <StyledInput type="text" name="name" placeholder="Name" value={friend.name} onChange={changeHandler}/>
                <StyledInput type="text" name="age" placeholder="Age" value={friend.age} onChange={changeHandler}/>
                <StyledInput type="text" name="email" placeholder="Email" value={friend.email} onChange={changeHandler}/>
            </div>
            <div className="form-buttons">
                <StyledButton enabled={!updateFriend}>Add Friend</StyledButton>
                <StyledButton enabled={updateFriend} >Update Friend</StyledButton>
            </div>
        </form>
    );
}

export default FriendForm;
