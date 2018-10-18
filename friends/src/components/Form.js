import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.addFriend}>
      <input onChange={props.changeHandler} name="name" type="input" placeholder="name" />
      <input onChange={props.changeHandler} name="age" type="input" placeholder="age" />
      <input onChange={props.changeHandler} name="email" type="input" placeholder="email" />
      <button type="submit">Add New Friend</button>
    </form>
  );
};

export default Form;
