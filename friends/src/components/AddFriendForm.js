import React from 'react';
import '../App.css';

const AddFriendForm = props => {
  return (
    <div>
      <form>
        Name: <input
        type="text"
        placeholder="Name"
        name="friendName"
        value={props.name}
        onChange={props.handleChange} />
        <br/>
        Age: <input
        type="number"
        placeholder="Age"
        name="friendAge"
        value={props.age}
        onChange={props.handleChange} />
        <br/>
        Email: <input
        type="text"
        placeholder="Email"
        name="friendEmail"
        value={props.email}
        onChange={props.handleChange} />
        <button onClick={props.handleSubmitFriend}>Add Friend</button>
      </form>
    </div>
  )
}

export default AddFriendForm;
