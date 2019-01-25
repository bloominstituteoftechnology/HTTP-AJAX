import React from 'react';
import {Link} from 'react-router-dom';

const Menu = props => {
  return (
    <div>
      <Link to='/post'>New</Link>
      <Link to='/update'>Update</Link>
    </div>
  );
};

export default Menu;
