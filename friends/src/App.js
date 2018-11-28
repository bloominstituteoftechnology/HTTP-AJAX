import React, { Component } from "react";
import axios from "axios";
import List from "./Components/List";
import Form from "./Components/Form";
import { Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      nameText: '',
      age: null,
      emailText: '',
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
  }

  addFriend = event => {
    event.preventDefault();
    this.setState({
      friends: [
        ...this.state.friends,
        {age: this.state.age, email: this.state.emailText, id: Date.now(), name: this.state.inputText, }
      ],
      inputText: '',
      age: null,
      emailText: '',
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route
            exact
            path="/"
            render={props => <List {...props} state={this.state} />}
          />
          <Route
            path="/form"
            render={props => <Form {...props} state={this.state}
            addFriend = {this.addFriend}
            handleChange = {this.handleChange} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
