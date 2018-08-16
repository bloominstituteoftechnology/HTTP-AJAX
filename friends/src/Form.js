import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.addNewFriend}>
      <input
        onChange={props.handleChange}
        name="name"
        placeholder="Name"
        value={props.name}
        type="text"
      />
      <input
        onChange={props.handleChange}
        name="age"
        placeholder="Age"
        value={props.age}
        type="number"
      />
      <input
        onChange={props.handleChange}
        name="email"
        placeholder="Email"
        value={props.email}
        type="email"
      />
      <button onClick={() => props.add.addNewFriend()}>Add</button>
    </form>
  );
};

export default Form;