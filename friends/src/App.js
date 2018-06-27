import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/Friends/FriendsList";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      f: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log("GIT RESPONSE", response);
        this.setState({ f: response.data });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  render() {
    // console.log("THIS STATE: ", this.state);
    return (
      <div>
        <Route exact path={"/"} component={LandingPage} />
        <Route
          path={"/friends"}
          render={props => {
            return <FriendsList {...props} f={this.state.f} />;
          }}
        />
        {/*<FriendsList f={this.state.f} foo="bar" />*/}
      </div>
    );
  }
}

export default App;
