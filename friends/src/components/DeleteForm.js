import React from 'react';

 const DeleteForm = (props) => {
    return (
    <form onSubmit = {props.addFriend} className = 'add-friend'>

        <input onChange = {props.formChange} className = 'name' name = 'name' placeholder = 'name'/>
        
        <button>Delete Friend</button>
    </form>
    )
}

 export default DeleteForm; 