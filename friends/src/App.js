import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

import FriendList from "./components/FriendList";

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
      .then(response => this.setState({ friends: response.data }))

      .catch(err => {
        console.log(err);
      });
  }

  handleInputChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  clickHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    this.setState({ name: "", age: "", email: "" });
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <h1 className="headline">LOOK AT ALL OF YOUR FRIENDS</h1>
        <FriendList friends={this.state.friends} />

        <h1>I HEARD YOU MADE A NEW FRIEND</h1>
        <form className="form">
          <input
            name="name"
            value={this.state.name}
            placeholder="Tell me their name!"
            onChange={this.handleInputChange}
            className="form__input"
          />
          <input
            name="age"
            value={this.state.age}
            placeholder="How old are they!"
            onChange={this.handleInputChange}
            className="form__input"
          />
          <input
            name="email"
            value={this.state.email}
            placeholder="Give me their email address!"
            onChange={this.handleInputChange}
            className="form__input"
          />
          <button onClick={this.clickHandler} className="form__btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
