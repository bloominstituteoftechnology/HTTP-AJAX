import React from "react";

const Form = props => {
  return (
    <div className="add-friend-form-container">
      <form className="add-friend-form" onSubmit={props.addFriend}>
        <div className="input-container">
          <input onChange={props.changeHandler} name="name" type="input" placeholder="name" />
          <input onChange={props.changeHandler} name="age" type="input" placeholder="age" />
          <input onChange={props.changeHandler} name="email" type="input" placeholder="email" />
        </div>
        <button type="submit">Add New Friend</button>
      </form>
    </div>
  );
};

export default Form;
