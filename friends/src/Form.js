import React from 'react';

function Form(props) {
  return (<form onSubmit={props.addFriend}>
    <input type='text' id='name' placeholder='Name' />
    <input type='text' id='age' placeholder='Age' />
    <input type='text' id='email' placeholder='Email' />
    <input type='submit' value='Submit' />
  </form>
  )
}

export default Form;