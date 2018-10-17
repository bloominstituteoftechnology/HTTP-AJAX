import React, { Component } from 'react';
import axios from 'axios';

const Form = ({ handleFormSubmit, handleInputChange }) => {
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h2>Add a new friend</h2>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
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
          name="age"
          className="text-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="email">
          Name:
        </label>
        <input
          type="text"
          name="email"
          className="text-input"
          onChange={handleInputChange}
        />
      </div>
      <button>Friended</button>
    </form>
  );
};

export default Form;
