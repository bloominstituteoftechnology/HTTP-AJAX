import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FriendsList from "./Components/FriendsList";
import FriendCard from "./Components/FriendCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <FriendsList data={this.state.data} />

        {this.state.data.length && (
          <Route
            path="/friend-:id"
            render={props => <FriendCard {...props} data={this.state.data} />}
          />
        )}
      </div>
    );
  }
}

export default App;
