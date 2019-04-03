import React from 'react';
import { Link } from 'react-router-dom';

export const Friend = props => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">{props.name}</p>
      <Link to={`/friends/${props.id}`} className="card-header-icon" exact>
        Edit
      </Link>
      <span className="card-header-icon">
        <button
          type="submit"
          onClick={props.deleteFriend}
          value={props.id}
          className="button is-small is-danger is-outlined"
        >
          Delete
        </button>
      </span>
    </header>
    <div className="card-content">
      <div className="content">
        <ul>
          <li>{props.age}</li>
          <li>{props.email}</li>
        </ul>
      </div>
    </div>
  </div>
);
