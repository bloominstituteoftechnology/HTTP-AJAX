//Input

import React from 'react';
import { Link } from 'react-router-dom';

const Input = props => {
  return(
    <div>
      <Link to="/">Home</Link>
        <form>
          <h2>Name</h2>
          <input
          type="text"
          />
            <h2>Age</h2>
            <input
            type="text"
            />
          <h2>Email</h2>
          <input
          type="text"
          />
        </form>
      <button>enter</button>
    </div>
  );
}

export default Input;
