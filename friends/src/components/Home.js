import React from 'react';

function Home(props) {
  const routeToFriend = event => {
    event.preventDefault();
    props.history.push('/list-friend');
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={routeToFriend} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}

export default Home;
