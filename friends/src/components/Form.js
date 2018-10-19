import React from 'react';
import './Form.css';

const Form = props => {
  const {
    handleFormSubmit,
    handleUpdateSubmit,
    handleInputChange,
    friend,
    editMode,
    activeFriend,
    history
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    if (editMode) {
      handleUpdateSubmit(activeFriend.id);
    } else {
      handleFormSubmit(e);
    }
    history.push('/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{editMode ? 'Update friend info...' : 'Add a new friend'}</h2>
      <div className="form-group">
        <label className="label" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          value={friend.name}
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
          value={friend.age}
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
          value={friend.email}
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
