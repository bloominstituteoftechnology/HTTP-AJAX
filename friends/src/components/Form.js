import React from 'react';
import '../App.css';

const Form = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={props.handleChange}
        value={props.name}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        onChange={props.handleChange}
        value={props.age}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={props.handleChange}
        value={props.email}
      />
      <button onClick={props.handleFriendSubmit}>Submit</button>
      <button onClick={props.handleCancel}>Cancel</button>
    </form>
  );
}

export default Form;
