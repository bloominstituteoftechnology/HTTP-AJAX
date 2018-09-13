import React from 'react';

const AddFriendForm = (props) => {
    return (
    <form onSubmit={props.addFriend} className = "add-friend">
        <input onChange={props.formChange} className="name" name="name" placeholder="name"/>
        <button>Remove Friend</button>
    </form>
    )
}

export default AddFriendForm;