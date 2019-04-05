import React, { Component } from "react";

// import "./App.css";

import axios from "axios";
import FriendsList from "./components/FriendsList";
import FormList from "./components/FormList";
import styled from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const StyledApp = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  updateFriends = newFriend => {
    this.setState({ friends: newFriend });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => console.log("Error!"));
  }

  render() {
    return (
      <StyledApp>
        <Route
          path="/"
          render={props => <FormList {...props} update={this.updateFriends} />}
        />
        <Route
          path="/"
          render={props => (
            <FriendsList friends={this.state.friends} {...props} />
          )}
        />
      </StyledApp>
    );
  }
}

export default App;
