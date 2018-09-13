import React from 'react';
import './Friend.css';

const NewFriend = props=> {
    return (
        <form onChange={props.addNewFriend}>
            <input
                name='name'
                value={props.value}
                type='text' 
                placeholder='Name'
            />
            <input 
                name='age'
                value={props.value}
                type='text' 
                placeholder='Age'
            />
            <input 
                name='name'
                value={props.value}
                type='text' 
                placeholder='Email'
            />
            <button>Add New Friend</button>
        </form>
    );
}

export default NewFriend;