import React from 'react';

const EditFriendForm = props => {
  return (
    <div className="friend-form-container">
      <h2 className="friend-form-title">Edit a friend</h2>
      <form className="friend-form">
        <p>You are currently editing: {props.friend}</p>
        <input type="text" name="name" placeholder={props.name} onChange={props.changeHandler} value={props.name} />
        <input type="number" name="age" placeholder={props.age} value={props.age} onChange={props.changeHandler} />
        <input type="text" name="email" placeholder={props.email} value={props.email} onChange={props.changeHandler} />
        <button onClick={props.editFriend}>Submit</button>
      </form>
    </div>
  )
}

export default EditFriendForm;