import React from 'react';

const AddFriendForm = ()=>{
    return(
        <div className="friends-list">
            <form className="add-friend-form">
                <input type="text" placeholder="Friends Name"/>
                <input type="text" placeholder="Friends Age"/>
                <input type="text" placeholder="Friends Email"/>
            </form>
            <button>Add New Friend</button>
        </div>
    )
}

export default AddFriendForm;