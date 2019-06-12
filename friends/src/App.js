import React from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { Route } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = e => {
    e.preventDefault();
    console.log("You just added a friend dawg!");
  };

  changeHandler = e => {
    e.preventDefault();
    console.log("Ready to handle some changes?!");
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />

        <Route
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
            />
          )}
        />

        <FriendForm
          changeHandler={this.changeHandler}
          addFriend={this.addFriend}
          friends={this.state.friends}
        />
      </div>
    );
  }
}

export default App;
