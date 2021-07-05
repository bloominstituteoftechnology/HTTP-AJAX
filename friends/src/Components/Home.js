import React from 'react';
import { Link } from 'react-router-dom';

import './ComponentsStyle.css';

function Home() {
  return (
    <div>
      <h1>Matt's Friends</h1>
      <h4>
        <Link to="my-friends">Meet my friends!</Link>
      </h4>
      <p>
        <Link to="friend-form">Maybe you can be my friend too...</Link>
      </p>
    </div>
  );
}

export default Home;
