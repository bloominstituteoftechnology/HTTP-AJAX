import React from 'react';

const FriendForm = (props) => {

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddNewFriend();
  }

  return (
    <div className='add-a-friend'>
      <h1>Welcome to the:</h1>
      <h2>Add-A-Friend System</h2>
      
      <form>
        <div className='form-div'>
          <input type='text' name='name' placeholder='Enter Name' onChange={props.handleTextChange} value={props.friendObject.name} />
          <input type='text' name='age' placeholder='Enter Age' onChange={props.handleTextChange} value={props.friendObject.age} />
          <input type='text' name='email' placeholder='Enter Email' onChange={props.handleTextChange} value={props.friendObject.email} />
          <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FriendForm;