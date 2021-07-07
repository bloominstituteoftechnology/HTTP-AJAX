import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Friends from "./components/Friends/Friends";
import FriendForm from "./components/FriendForm/FriendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Friends} />
        <Route exact path="/friendform" component={FriendForm} />
      </div>
    );
  }
}

export default App;
