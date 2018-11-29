import React from "react";

const Form = props => {
  return (
    <form className="form" onSubmit={props.addNewFriend}>
      <div className="input-item">
        <label>Name:</label>
        <input
          onChange={props.handleChange}
          type="name"
          name="name"
          value={props.name}
        />
      </div>

      <div className="input-item">
        <label>Age:</label>
        <input
          onChange={props.handleChange}
          type="number"
          name="age"
          value={props.age}
        />
      </div>

      <div className="input-item">
        <label>Email:</label>
        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.email}
        />
      </div>

      <div className="save-btn">
        <button>Save</button>
      </div>
    </form>
  );
};

export default Form;
