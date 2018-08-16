import React from "react";

const NewFriends = props => {
  return (
    <form action="">
      <label className="name">
          Name:
        <input
          onChange={props.handleChangeName}
          value={props.name}
          type="text"
        />
      </label>
      <label className="age">
          Age:
        <input
          onChange={props.handleChangeName}
          value={props.age}
          type="number"
        />
      </label>
      <label className="email">
          Email:
        <input
          onChange={props.handleChangeName}
          value={props.email}
          type="email"
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewFriends;
