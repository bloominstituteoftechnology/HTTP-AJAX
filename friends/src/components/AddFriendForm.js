import React from 'react';

const AddFriendForm = props => {
    return (
        <form>
            <input type='text' placeholder='name' name='name' />
            <input type='text' placeholder='age' name='age' />
            <input type='text' placeholder='email' name='email' />
            <button>Save</button>
        </form>
    );
}

export default AddFriendForm;