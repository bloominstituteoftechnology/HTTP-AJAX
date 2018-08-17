import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Friends from "./components/Friends.jsx";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      friends: [],
      name: " ",
      age: " ",
      email: " "
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      console.log(response);
      this.setState({
        friends: response.data
        // loading: false
      });
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.friends);
    const user = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios.post(`${url}`, user).then(response => {
      // console.log(user);
      // console.log(response.data);

      this.setState({
        name: "",
        age: "",
        email: "",
        friends: response.data
      });
    });
  }

  delete = id => {
    axios
      .delete(`${url} ${id} `)

      .then(response => {
        // console.log(user);
        // console.log(response.data);

        this.setState({
          name: "",
          age: "",
          email: "",
          friends: response.data
        });
      });
  };

  render() {
    return (
      <div>
        <div className="App">
          <Friends friends={this.state.friends} delete={this.delete} />
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Age:
              <br />
              <input
                type="text"
                value={this.state.age}
                name="age"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <br />
              <input
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
