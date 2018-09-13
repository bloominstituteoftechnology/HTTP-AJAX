import React from 'react';
import './Friend.css';

const NewFriend = props=> {
    return (
        <form onChange={props.handleChange}>
            <input
                name='name'
                type='text' 
                placeholder='Name'
            />
            <input 
                name='age'
                type='text'
                placeholder='Age'
            />
            <input 
                name='email'
                type='text' 
                placeholder='Email'
            />
            <button onClick={props.addFriend}>Add New Friend</button>
        </form>
    );
}

export default NewFriend;