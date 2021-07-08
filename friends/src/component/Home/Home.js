import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Meet My friends</h1>
      <h4>Danger! They are not human!!</h4>
      <Link to="/friends">Enter</Link>
    </div>
  );
}

export default Home;
