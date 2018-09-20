import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Emily's Friend List</h1>
        <h4>Enter below:</h4>
        <p>Be there or be square!</p>

        <Link to="/friends">Enter</Link>
  </div>
  );
}

export default Home;
