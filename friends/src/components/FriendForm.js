import React from 'react';
import { StyledInput, StyledButton } from '../Style';

const FriendForm = ({friend, changeHandler, addNewFriend, updateFriend}) => {
    return (
        <div className="container">
            <form onSubmit={addNewFriend} className="form">
                <div className="form-inputs">
                    <StyledInput type="text" name="name" placeholder="Name" value={friend.name} onChange={changeHandler} autoComplete="off"/>
                    <StyledInput type="number" name="age" placeholder="Age" value={friend.age} onChange={changeHandler} autoComplete="off"/>
                    <StyledInput type="email" name="email" placeholder="Email" value={friend.email} onChange={changeHandler} autoComplete="off"/>
                </div>
                <div className="form-buttons">
                    <StyledButton enabled={!updateFriend}>Add Friend</StyledButton>
                    <StyledButton enabled={updateFriend} >Update Friend</StyledButton>
                </div>
            </form>
        </div>
    );
}

export default FriendForm;
