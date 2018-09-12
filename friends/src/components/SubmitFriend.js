import React from 'react';

const SubmitFriend = props => {
  return (
    <div className='form-class'>
      <form onSubmit={props.postRequest}>
        <input type="text" name="name"
          placeholder="name"
          value={props.value.name}
          onChange={props.handleChange}
        />
        <input type="text" name="age"
          placeholder="age"
          value={props.value.age}
          onChange={props.handleChange}
        />
        <input type="text" name="email"
          placeholder="email"
          value={props.value.email}
          onChange={props.handleChange}
        />
        <input type="submit" value='Submit' />
      </form>
    </div>
  )
}

export default SubmitFriend
