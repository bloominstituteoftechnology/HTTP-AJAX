import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <h1 classname='home-title'>Welcome To My Friends List</h1>
      <h4>Feel free to be offended if you are not on the list</h4>
      <Link to='/friends'>Enter</Link>
    </div>
  );
};

export default Home;
