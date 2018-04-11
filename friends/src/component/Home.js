import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/friends">
      <h3>Welcome to Cambridge Analytica database.</h3>
      <h3>Click here to access user information (for sale)</h3>
      </Link>
    </div>
  );
};

export default Home;
