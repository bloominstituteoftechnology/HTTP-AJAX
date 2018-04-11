import React from "react";
import './AddFriend.css';

const AddFriend = props => {
  return (
    <div className='addfriend-container'>
      <h2>Add New Friend:</h2>
      <input type="text" name="name" placeholder="name" onChange={props.onChange}/>
      <input type="text" name="age" placeholder="age" onChange={props.onChange}/>
      <input type="text" name="email" placeholder="email" onChange={props.onChange}/>
      <button onClick={props.onClick}>Add</button>
    </div>
  );
};

export default AddFriend;