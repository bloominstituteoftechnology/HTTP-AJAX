import React from 'react'

const Form = (props) => {
    return(
        <form onSubmit={props.addNewFriend}>
            <input type='text' name='name' placeholder='name' value={props.name} onChange={props.handleChange}/>
            <input type='text' name='age' placeholder='age' value={props.age} onChange={props.handleChange}/>
            <input type='text' name='email' placeholder='email' value={props.email} onChange={props.handleChange}/>
            <input type='submit' />
        </form>
    )
};

export default Form