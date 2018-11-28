import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

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
  constructor(props) {
    super(props);
    this.state = {
      friendsData: [...props.friendsData],
      name: "",
      age: "",
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
    if (
      this.state.name !== "" &&
      this.state.age !== "" &&
      this.state.email !== ""
    ) {
      axios({
        method: "post",
        url: "http://localhost:5000/friends/",
        data: {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        }
      });
      this.setState(prevState => ({
        friendsData: [
          ...prevState.friendsData,
          {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
          }
        ],
        name: "",
        age: "",
        email: ""
      }));
      window.location.reload();
    } else return;
  };

  render() {
    console.log("form props", this.props);
    return (
      <StyledForm onSubmit={this.addFriend}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Enter Friends Name..."
          value={this.state.name}
        />
        <input
          type="text"
          name="age"
          onChange={this.handleChange}
          placeholder="Enter Friends Age..."
          value={this.state.age}
        />
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          placeholder="Enter Friends Email..."
          value={this.state.email}
        />
        <input type="submit" name="submit" />
      </StyledForm>
    );
  }
}
