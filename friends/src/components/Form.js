import React from 'react';
import './Form.css';

const Form = props => {
  const {
    handleFormSubmit,
    handleUpdateSubmit,
    handleInputChange,
    name,
    email,
    age,
    editMode,
    activeFriend,
    history
  } = props;
  const handleSubmit = e => {
    console.log(activeFriend);
    e.preventDefault();
    if (editMode) {
      handleUpdateSubmit(parseInt(activeFriend.id));
    } else {
      handleFormSubmit(e);
    }
    history.push('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <button className="btn">{editMode ? 'Update' : 'Friended'}</button>
    </form>
  );
};

export default Form;
