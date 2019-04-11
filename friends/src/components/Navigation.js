import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <Link to='/'>Form</Link>
      <Link to='/friends'>Friends List</Link>
    </nav>
  );
}

export default Navigation;
