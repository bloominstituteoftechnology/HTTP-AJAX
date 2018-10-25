import React from 'react';

// Takes in props:
// - handleSubmit: fn()
// - handleChange: fn()

const AddFriend = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Add new friend:</legend>
        <div className='addFriend'>
          <input type='text' name='name' placeholder='Name' onChange={props.handleChange} />
          <input type='text' name='age' placeholder='Age' onChange={props.handleChange} />
          <input type='text' name='email' placeholder='Email' onChange={props.handleChange} />
          <button>Add</button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddFriend;