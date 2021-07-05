import React from 'react';

const AddFriendForm = props => {
  return (
    <div className="friend-form-container">
      <h2 className="friend-form-title">Add a new friend</h2>
      <form className="friend-form">
        <input type="text" name="name" placeholder="Name" onChange={props.changeHandler} />
        <input type="number" name="age" placeholder="Age" onChange={props.changeHandler} />
        <input type="text" name="email" placeholder="Email" onChange={props.changeHandler} />
        <input type="text" name="img" placeholder="Image Source" onChange={props.changeHandler} />
        <button onClick={props.addNewFriend}>Submit</button>
      </form>
    </div>
  )
}

export default AddFriendForm;