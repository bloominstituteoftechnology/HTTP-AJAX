import React from "react";

const FriendForm = props => {
  return (
    <form className="input-form" onSubmit={props.handleSubmit}>
      <label className="name">
          Name:
        <input
          onChange={props.handleUpdate}
          name="newName"
          value={props.nameAdd}
          type="text"
          placeholder="Name"
        />
      </label>
      <label className="age">
          Age:
        <input
          onChange={props.handleUpdate}
          name="newAge"
          value={props.ageAdd}
          type="number"
          placeholder="Age"
        />
      </label>
      <label className="email">
          Email:
        <input
          onChange={props.handleUpdate}
          name="newEmail"
          value={props.emailAdd}
          type="email"
          placeholder="Email"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FriendForm;
