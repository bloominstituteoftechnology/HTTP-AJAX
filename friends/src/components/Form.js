import React from 'react';
import './Form.css';

const Form = ({
  handleFormSubmit,
  handleInputChange,
  name,
  email,
  age,
  editMode
}) => {
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>Add a new friend</h2>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          value={name}
          name="name"
          className="text-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="age">
          Age:
        </label>
        <input
          type="number"
          value={age}
          name="age"
          className="text-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          value={email}
          name="email"
          className="text-input"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn" disabled={editMode}>
        Friended
      </button>
    </form>
  );
};

export default Form;
