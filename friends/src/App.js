import React, { Component } from "react";
import axios from "axios";
import List from "./Components/List";
import Form from "./Components/Form";
import { Route } from "react-router-dom";
import Edit from "./Components/Edit";

import "./App.css";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: null,
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addFriend = data => {
    axios
      .post("http://localhost:5000/friends", data)
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data,
          name: "",
          age: null,
          email: ""
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`${url}/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  editFriend = (id, data) => {
    axios
      .put(`${url}/${id}`, data)
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data,
          name: "",
          age: null,
          email: "",
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route
            exact
            path="/"
            render={props => (
              <List
                {...props}
                state={this.state}
                deleteFriend={this.deleteFriend}
              />
            )}
          />
          <Route
            path="/form"
            render={props => (
              <Form
                {...props}
                state={this.state}
                addFriend={this.addFriend}
                handleChange={this.handleChange}
              />
            )}
          />

          <Route
            path="/friends/:id"
            render={props => (
              <Edit
                {...props}
                state={this.state}
                editFriend={this.editFriend}
                handleChange={this.handleChange}
              />
            )}
          />
        </header>
      </div>
    );
  }
}

export default App;
