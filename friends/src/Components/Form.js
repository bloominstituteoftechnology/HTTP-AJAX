import React from "react";

const Form = props => {
  return (
    <form className="form">
      <div className="input-item">
        <label>Name:</label>
        <input type="text" />
      </div>
      <div className="input-item">
        <label>Age:</label>
        <input type="text" />
      </div>
      <div className="input-item">
        <label>Email:</label>
        <input type="text" />
      </div>
      <div className="save-btn">
        <button>Save</button>
      </div>
    </form>
  );
};

export default Form;
