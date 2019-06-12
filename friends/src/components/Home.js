import React from 'react';

function Home(props) {
  function navigateToShop(e) {
    e.preventDefault();
    props.history.push('/item-list');
  }

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://localHost:5000"
        alt=""
      />
      <button onClick={navigateToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}

export default Home;