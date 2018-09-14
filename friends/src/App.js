import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import Display from "./components/Display";
import NewFriend from "./components/NewFriend";
import Loading from "./components/Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(result => {
        setTimeout(() => {
          this.setState({ friends: result.data });
        }, 1000);
      })
      .catch(err => console.log(err));
  }

  handleAddNewFriends = () => {
    console.log("firing");
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  };

  stateNewFriend = (event, newFriend) => {
    this.setState({ newFriend }, () => {
      this.handleAddNewFriends();
    });
  };

  render() {
    return (
      <div className="App">
        <Link to="/" className="link">
          Friends List
        </Link>
        <Link to="/newfriend" className="link">
          New Friend
        </Link>
        {this.state.friends.length === 0 ? (
          <Route exact path="/" component={Loading} />
        ) : (
          <Route
            exact
            path="/"
            render={props => (
              <Display {...props} friends={this.state.friends} />
            )}
          />
        )}
        <Route
          path="/newfriend"
          render={props => (
            <NewFriend {...props} stateNewFriend={this.stateNewFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
