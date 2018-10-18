import React from 'react';

const FriendsListForm = (props) => {
    return (
    <div>
    <form>
        <h1>My Friends List</h1>
        <div className= "formWrapper">
        <input name= "name" placeholder= "Name" onChange= {props.addFriendData} />
        <input name= "age" placeholder= "Age" onChange= {props.addFriendData} />
        <input name= "email" placeholder= "Email" onChange= {props.addFriendData} />
        </div>
        <button name = "add" onClick={props.addFriend}>Add</button>
    </form>
    </div>
    )
}

export default FriendsListForm