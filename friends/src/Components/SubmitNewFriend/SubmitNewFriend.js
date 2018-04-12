import React from 'react';
import './SubmitNewFriend.css';
const SubmitNewFriend = (props) => {
  return (
    <div className='formContainer'>
      <h2>Add New Friend Here:</h2>
      <form className='fieldContainer'>
        <input
          name='name'
          className='input'
          value={props.name}
          placeholder='Name'
          onChange={props.updateValue}
        />
        <input
          name='email'
          className='input'
          value={props.email}
          placeholder='Email'
          onChange={props.updateValue}
        />
        <input
          name='age'
          className='input'
          value={props.age}
          placeholder='Age'
          onChange={props.updateValue}
        />
      </form>
      <button type='submit' onClick={props.addNewFriend}>Submit</button>
    </div>

  );
}
export default SubmitNewFriend;
