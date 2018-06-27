import React from 'react';

const AddFriendForm = props => {
    return (
        <form>
            <input value={props.name} onChange={props.handleInput} type='text' placeholder='name' name='name' />
            <input value={props.age} onChange={props.handleInput} type='text' placeholder='age' name='age' />
            <input value={props.email} onChange={props.handleInput} type='text' placeholder='email' name='email' />
            <button>Save</button>
        </form>
    );
}

export default AddFriendForm;