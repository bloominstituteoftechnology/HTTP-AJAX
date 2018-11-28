import React from "react";

function Form(props) {
  return (
    <div>
      <h1>Add New Friend</h1>
      <form>
        Name:
        <br />
        <input type="text" />
        <br />
        Age:
        <br />
        <input type="text" />
        <br />
        Email:
        <br />
        <input type="text" />
        <br />
        <br />
        <input type="submit" value="Add New Friend" />
      </form>
    </div>
  );
}

export default Form;
