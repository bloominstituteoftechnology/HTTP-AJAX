import React from 'react';
import '../App.css';

const Form = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="name..."
        name="name"
        onChange={props.handleChange}
        value={props.name}
      />
      <input
        type="text"
        placeholder="age..."
        name="age"
        onChange={props.handleChange}
        value={props.age}
      />
      <input
        type="text"
        placeholder="email..."
        name="email"
        onChange={props.handleChange}
        value={props.email}
      />
      <button onClick={props.handleFriendSubmit}>Submit</button>
    </form>
  );
}

export default Form;