import React, { Component } from "react";
import "./App.css";
import FriendThing from "./Components/Friends";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import FriendForm from "./Components/FriendForm";
import EditFriend from "./Components/EditFriend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/friends" component={FriendThing} />
        <Route path="/add" render={props => <FriendForm {...props} />} />
        <Route
          path="/edit"
          render={props => (
            <EditFriend {...props} editFriend={props.editFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
