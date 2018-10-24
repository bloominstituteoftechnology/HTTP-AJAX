import React from 'react';

const AddFriend = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <legend>Add new entry:</legend>
        <div className='friend'>
          <input type='text' name='name' placeholder='Name' className='friendName' />
          <input type='text' name='age' placeholder='Age' className='friendAge' />
          <input type='text' name='email' placeholder='Email' className='friendEmail' />
          <button>Enter</button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddFriend;