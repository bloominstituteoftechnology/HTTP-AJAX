import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='welcome'>
      <h1>Hello There Traveler!</h1>
      <h3>Below is the treasure you seek.</h3>

      <Link to='/friends'>Thar she blows</Link>
    </div>
  )
}

export default Home;