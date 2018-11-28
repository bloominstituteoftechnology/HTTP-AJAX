import React, { Component } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 1rem auto;
  background: blue;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    width: 80%;
    border-radius: 5px;
    border: none;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & input[type="submit"] {
    text-transform: uppercase;
    display: inline-block;
    width: auto;
    align-self: flex-start;
    margin-left: 1rem;
    max-width: 40%;
    font-size: 0.6rem;
  }
`;

export default class AddFriendsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      email: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <StyledForm onSubmit={this.addFriend}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Enter Friends Name..."
        />
        <input
          type="text"
          name="age"
          onChange={this.handleChange}
          placeholder="Enter Friends Age..."
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          placeholder="Enter Friends Email..."
        />
        <input type="submit" name="submit" />
      </StyledForm>
    );
  }
}
