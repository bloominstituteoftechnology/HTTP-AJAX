import React from "react";

const InputForm = props => {
  return (
    <form>
      <label>
        ID:
        <input
          name="id"
          type="number"
          placeholder="#"
          value={props.info.id}
          onChange={props.change}
        />
      </label>
      <label>
        Friend's Name:
        <input
          name="name"
          type="text"
          placeholder="name here..."
          value={props.info.name}
          onChange={props.change}
          required
        />
      </label>

      <label>
        Friend's Age:
        <input
          name="age"
          type="number"
          placeholder="age here..."
          value={props.info.age}
          onChange={props.change}
          required
        />
      </label>

      <label>
        Email Address:
        <input
          name="email"
          type="email"
          placeholder="email here..."
          value={props.info.email}
          onChange={props.change}
          required
        />
      </label>
      <input name="submit" type="submit" onClick={props.submit} />
    </form>
  );
};

export default InputForm;
