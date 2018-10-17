import React from 'react';


const Form = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <label>
            Your friend's name:
          <input
            type='text'
            name='name'
            id='name'
            placeholder='name'
            value={props.name}
            onChange={props.handleInput}
          />
        </label>
        <label>
          Your friend's age:
          <input
            type='number'
            name='age'
            id='age'
            placeholder="age"
            value={props.age}
            onChange={props.handleInput}
          />
      </label>
      <label>
        Your friend's email:  
          <input
            type='email'
            name='email'
            id='email'
            placeholder='email'
            value={props.email}
            onChange={props.handleInput}
          />
        </label>
        <button
          type='submit'>
            Done!
          </button>
      </form>
  )
}

export default Form;
