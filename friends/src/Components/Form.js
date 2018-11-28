import React from "react";

const Form = props => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Age</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default Form;
