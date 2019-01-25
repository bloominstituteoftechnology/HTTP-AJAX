import React from 'react';
import './styles/navBar.scss';

const Home = props => {
  const friendsButton = () => {
    props.history.push('/friends');
  };

  const homeButton = () => {
    props.history.push('/');
  };

  const addButton = () => {
    props.history.push('/signup');
  };

  return (
    <div className="navCont">
      <nav className="navBar">
        <button className="navButton" onClick={homeButton}>
          Home
        </button>
        <button className="navButton" onClick={friendsButton}>
          Friends
        </button>
        <button className="navButton" onClick={addButton}>
          Add Friend
        </button>
      </nav>
    </div>
  );
};

export default Home;
