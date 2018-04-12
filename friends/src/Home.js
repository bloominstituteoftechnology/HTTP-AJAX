import React, { Component } from "react";
import logo from "./logo.svg";

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">HTTP-AJAX</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/Friend.js/</code> and save to reload.
      </p>
    </div>
  );
};

export default Home;
