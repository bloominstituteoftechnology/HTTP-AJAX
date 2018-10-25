import React from 'react';

const AddFriend = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Add new friend:</legend>
        <div className='addFriend'>
          <input type='text' name='name' placeholder='Name'  />
          <input type='text' name='age' placeholder='Age'  />
          <input type='text' name='email' placeholder='Email' />
          <button>Add</button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddFriend;