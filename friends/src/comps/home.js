import React from 'react';

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
        <button className="home" onClick={homeButton}>
          Home
        </button>
        <button className="friends" onClick={friendsButton}>
          Friends
        </button>
        <button className="addFriend" onClick={addButton}>
          Add Friend
        </button>
      </nav>
    </div>
  );
};

export default Home;
