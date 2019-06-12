import React from 'react';
 
const Form = (props) => {
    return (
        <div>
        <form onSubmit ={(e) =>props.submit(e)}>
            <input type='text'  onChange={e=>props.inputValue(e.target.value, 'name')} placeholder='Name' required/>
            <input type='text' onChange={e=>props.inputValue(e.target.value, 'age')} placeholder='Age' required />
            <input type='email' onChange={e=>props.inputValue(e.target.value, 'email')} placeholder='Email' required/>
            <input type='submit' value='Add Friend' />
        </form>
        </div>
    )
}
export default Form