import React from 'react';

const FriendForm = ({friend, changeHandler, addNewFriend, updateFriend}) => {
    return (
        <form onSubmit={addNewFriend}>
            <input type="text" name="name" placeholder="Name" value={friend.name} onChange={changeHandler}/>
            <input type="text" name="age" placeholder="Age" value={friend.age} onChange={changeHandler}/>
            <input type="text" name="email" placeholder="Email" value={friend.email} onChange={changeHandler}/>
            <button>{updateFriend?'Update Friend':'Add Friend'}</button>
        </form>
    );
}

export default FriendForm;
