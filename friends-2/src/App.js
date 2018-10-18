import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Friends from "./Components/Friends";
import FriendsForm from "./Components/FriendsForm";
import { Route, NavLink } from "react-router-dom";
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

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveNoteData = () => {
    const note = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends/", note)
      .then(savedNote => console.log(savedNote))
      .catch(err => console.log("bahhhh", err));
    this.setState({ name: "", age: "", email: "" });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Fragment>
        <div className="App" />
        <NavLink to="/" activeClassName="form-link">
          Home
        </NavLink>
        <NavLink to="/form" activeClassName="form-link">
          Form
        </NavLink>
        <Route
          exact
          path="/"
          render={props => <Friends friends={this.state.friends} {...props} />}
        />
        <Route
          path="/form"
          render={props => (
            <FriendsForm
              handleTextInput={this.handleTextInput}
              saveNoteData={this.saveNoteData}
              name={this.state.name}
              age={this.state.age}
              email={this.state.email}
              {...props}
            />
          )}
        />
      </Fragment>
    );
  }
}

export default App;
