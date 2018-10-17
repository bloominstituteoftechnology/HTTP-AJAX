import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.addFriend}>
      <input onChange={props.changeHandler} name="name" type="input" placeholder="name" />
      <input onChange={props.changeHandler} name="age" type="number" placeholder="age" />
      <input onChange={props.changeHandler} name="email" type="email" placeholder="email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
