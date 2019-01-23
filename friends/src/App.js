import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import FriendsList from "./Components/FriendsList";
import AddFriendForm from "./Components/AddFriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          exact
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/addfriend"
          render={props => {
            return <AddFriendForm {...props} refresh={this.updateState} />;
          }}
        />
      </div>
    );
  }
}

export default App;
