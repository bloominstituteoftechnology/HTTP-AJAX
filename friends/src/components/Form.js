import React from "react";

const Form = props => (
  <form className="form">
    <h2>Add Another Friend!</h2>
    <input
      type="text"
      name="name"
      placeholder="Name"
      onChange={props.handleInputChange}
      value={props.name}
      required
    />
    <br />
    <input
      type="text"
      name="age"
      placeholder="Age"
      onChange={props.handleInputChange}
      value={props.age}
      required
    />
    <br />
    <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={props.handleInputChange}
      value={props.email}
      required
    />
    <br />
    <input type="submit" />
  </form>
);

export default Form;
