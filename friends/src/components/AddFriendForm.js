import React from 'react';

const AddFriendForm = ()=>{
    return(
        <div className="friends-list">
            <form className="add-friend-form">
                <input value="name" type="text" placeholder="Friends Name"/>
                <input value="age" type="text" placeholder="Friends Age"/>
                <input value="email" type="text" placeholder="Friends Email"/>
            </form>
            <button>Add New Friend</button>
        </div>
    )
}

export default AddFriendForm;