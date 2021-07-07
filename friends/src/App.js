import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Friend from "./components/friends/Friend";
import FriendForm from "./components/friendForm/FriendForm";
import IndFriendCard from "./components/friends/IndFriendCard";

let dataUrl = "http://localhost:5000/friends/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsData: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get(dataUrl)
      .then(response => {
        this.setState({ friendsData: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <div className="mainAppWrapper">
          <div>
            {/* <div className="crt"> */}
            <h2>List of Friends</h2>
          </div>
          <Route
            exact
            path={"/"}
            render={props => (
              <Friend {...props} friends={this.state.friendsData} />
            )}
          />
          <Route
            exact
            path={"/"}
            render={props => <FriendForm {...props} url={dataUrl} />}
          />
          <Route
            path={`/friends/:name`}
            render={props => (
              <IndFriendCard {...props} data={this.state.friendsData} />
            )}
          />
          {/* <FriendForm url={dataUrl} /> */}
        </div>
      </Fragment>
    );
  }
}

export default App;
