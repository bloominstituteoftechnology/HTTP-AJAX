import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./component/Home/Home";
import FriendsList from "./component/FriendsList/FriendsList";
import FriendsForm from "./component/FriendsForm/FriendsForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        // console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <ul className="friends-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/friendsform">Friends Form</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path={`/friends`}
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route exact path={`/friendsform`} component={FriendsForm} />
      </div>
    );
  }
}

export default App;
