import React from "react";

const Form = props => (
  <form className={props.classatr} onSubmit={props.handleSubmit}>
    <h2>
      {props.title} <span onClick={props.closeUpdateForm}>{props.close}</span>
    </h2>
    <input
      type="text"
      name={props.name1}
      placeholder="Name"
      onChange={props.handleInputChange}
      value={props.name}
      required
    />
    <br />
    <input
      type="number"
      name={props.name2}
      placeholder="Age"
      onChange={props.handleInputChange}
      value={props.age}
      required
    />
    <br />
    <input
      type="email"
      name={props.name3}
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
