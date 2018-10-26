import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import FriendCard from "./components/FriendCard";
import FriendList from "./components/FriendList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: 0,
        email: "",
        description: ""
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  numberInputChange = e => {
    e.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: parseInt(e.target.value)
      }
    });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response =>
        this.setState({
          friends: response.data,
          newFriend: { name: "", age: 0, email: "" }
        })
      )
      .catch(error => console.log(error));
  };

  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  deleteFriend = friend => {
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <Route
          path="/"
          render={props => <NavBar {...props} friends={this.state.friends} />}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Route
          exact
          path="/friends"
          render={props => (
            <FriendList
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              inputChange={this.inputChange}
              addNewFriend={this.addNewFriend}
              numberInputChange={this.numberInputChange}
              newFriend={this.state.newFriend}
            />
          )}
        />
        <Route
          exact
          path="/friends/:id"
          render={props => (
            <FriendCard
              {...props}
              friends={this.state.friends}
              updateFriend={this.updateFriend}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
      </>
    );
  }
}

export default App;
