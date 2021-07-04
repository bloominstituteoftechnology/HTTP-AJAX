import React from 'react';
// import axios from 'axios';

const AddFriend = props => {
    return (
        <form>
            <input
            type='text'
            name='name'
            placeholder='Name'
            onChange={props.textHandler}
            />
            <input
            type='text'
            name='age'
            placeholder='Age'
            onChange={props.textHandler}
            />
            <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={props.textHandler}
            />
            <button onClick={props.addFriend}>Add New Friend</button>
        </form>
    )
}

export default AddFriend;