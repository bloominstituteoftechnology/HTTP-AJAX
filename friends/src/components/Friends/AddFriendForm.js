import React from "react";

const AddFriendForm = props => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="age">Age</label>
      <input type="text" id="age" />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default AddFriendForm;
