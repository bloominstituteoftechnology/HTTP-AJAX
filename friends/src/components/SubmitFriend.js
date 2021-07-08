import React from 'react';

const SubmitFriend = props => {
  return (
    <div className='form-class'>
      <form onSubmit={props.postRequest}>
        <input
          type="text" 
          name="name"
          placeholder="name"
          value={props.values.name}
          onChange={props.handleChange}
        />
        <input
          type="text" 
          name="age"
          placeholder="age"
          value={props.values.age}
          onChange={props.handleChange}
        />
        <input
          type="text" 
          name="email"
          placeholder="email"
          value={props.values.email}
          onChange={props.handleChange}
        />
        <input type="submit" value='Submit' />
      </form>
    </div>
  )
}

export default SubmitFriend
