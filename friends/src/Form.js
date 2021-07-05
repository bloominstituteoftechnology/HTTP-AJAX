import React from "react";

const Form = props => {
  return (
    <form action="" onSubmit={props.addFriendHandle}>
      <p>O Haaaaaaaiiiiiiiiiii</p>
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={props.inputChangeHandle}
        value={props.name}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={props.inputChangeHandle}
        value={props.age}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={props.inputChangeHandle}
        value={props.email}
      />
      <button type="submit">Click to be my friend!</button>
    </form>
  );
};

export default Form;
