import React from "react";

const Home = props => {
  return (
    <div className="home-wrapper">
      <button
        onClick={() => props.history.replace("/friends")}
        className="home-btn"
      >
        Enter Friends List
      </button>
    </div>
  );
};

export default Home;
