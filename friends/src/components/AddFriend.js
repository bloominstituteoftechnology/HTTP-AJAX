import React from "react";
import styled from "styled-components";
import axios from "axios";

const url = "http://localhost:5000/friends"

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email
    };
    axios.post(url, newFriend).then(response => {
      this.setState({ name: "", age: "", email: "" });
      this.props.update(response.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          placeholder="Enter Name"
          onChange={this.inputHandler}
        />
        <input
          type="text"
          name="age"
          id="age"
          value={this.state.age}
          placeholder="Enter Age"
          onChange={this.inputHandler}
        />
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          placeholder="Enter E-Mail"
          onChange={this.inputHandler}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default AddFriend;
