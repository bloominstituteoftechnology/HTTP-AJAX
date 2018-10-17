import React from 'react';

const AddFriendForm = (props)=>{
    console.log(props)
    return(
        <div className="friends-list">
            <form className="add-friend-form">
                <input 
                name="name" 
                onChange={props.onChangeHandler} 
                value={props.newFriend.name} 
                type="text" 
                placeholder="Friends Name"
                />

                <input 
                name="age" 
                type="text" 
                placeholder="Friends Age"
                onChange={props.onChangeHandler}
                value={props.newFriend.age} 
                />

                <input 
                type="text" 
                placeholder="Friends Email"
                value={props.newFriend.email} 
                name="email"
                />

            </form>
            <button onClick={props.addNewFriend}>Add New Friend</button>
        </div>
    )
}

export default AddFriendForm;