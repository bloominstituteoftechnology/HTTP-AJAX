import React from "react";

const Form = props => {
  console.log(props);
  return (
    <form action="" onSubmit={props.addFriendHandle}>
      <p>O Haaaaaaaiiiiiiiiiii</p>
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Age" />
      <input type="email" placeholder="Email" />
      <button type="submit">Click to be my friend!</button>
    </form>
  );
};

export default Form;
