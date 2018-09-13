import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import FriendForm from "./components/FriendForm";
import FriendsList from "./components/FriendsList";

const blankFormValues = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddNewFriend = event => {
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(response =>
        this.setState({ friends: response.data, friend: blankFormValues })
      );
  };

  render() {
    return (
      <div className="App">
        <NavLink to="/add-friend">Add New</NavLink>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/add-friend"
          render={props => (
            <FriendForm
              {...props}
              friend={this.state.friend}
              handleAddNewFriend={this.handleAddNewFriend}
              handleChange={this.handleChange}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
