import React from 'react';

const FriendForm = props => (
  <form className="form" onSubmit={props.handleSubmit}>
    <div className="field">
      <label htmlFor="name" className="label">
        Name
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            onChange={props.handleChange}
          />
        </div>
      </label>
    </div>
    <label htmlFor="age" className="label">
      Age
      <div className="control">
        <input
          className="input"
          type="number"
          name="age"
          onChange={props.handleChange}
        />
      </div>
    </label>
    <label htmlFor="email" className="label">
      Email
      <div className="control">
        <input
          className="input"
          type="email"
          name="email"
          onChange={props.handleChange}
        />
      </div>
    </label>
    <button className="button is-success" type="submit">
      Add
    </button>
  </form>
);

export default FriendForm;
