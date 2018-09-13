import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Welcome!</h1>
        <h4>Wanna Meet My Friends!</h4>
        {/* <p>Warning: this data is classified!</p> */}

        <Link to="/friends">Click Here</Link>
  </div>
  );
}

export default Home;
