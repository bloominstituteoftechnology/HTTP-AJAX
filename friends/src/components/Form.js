import React from 'react'

function form(props) {
    return (
    <div>
        <input 
        type='text'
        onChange={props.handleInput}
        placeholder='name'
        name='name'
        value={props.name}
        />
        <input 
        type='number'
        onChange={props.handleInput}
        placeholder='age'
        name='age'
        value={props.age}
        />
        <input 
        type='text'
        onChange={props.handleInput}
        placeholder='email'
        name='email'
        value={props.email}
        />
        <button onClick={props.saveFriend}>Save</button>
    </div>
    );
}


export default form;