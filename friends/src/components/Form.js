import React from 'react'
import "../App.css"

function form(props) {
    return (
    <div className='form'>
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
        <p>Note all fields are needed!</p>
    </div>
    );
}


export default form;