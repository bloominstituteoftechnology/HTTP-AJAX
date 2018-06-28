import React from "react";

const AddFriendForm = props => {
  return (
    <form>
      <h3>Add a new friend</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Emial" />
      <label htmlFor="age">Age</label>
      <input type="text" id="age" name="age" placeholder="Age" />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default AddFriendForm;
