import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <div>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/friends'}>Friends</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
