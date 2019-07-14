import React from 'react';

const Nav = props => {
  return (
    <div className='nav'>
    <button class="hamburger">&#9776;</button>
    <img className="logo" src={require('./logo.png')} />
    <p className="navs"> FRIENDS ENEMIES</p>
    </div>
  );
}


export default Nav;
