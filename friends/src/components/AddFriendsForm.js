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
    width: 90%;
    border-radius: 35px;
    border: none;
    padding: 0.75rem;
    margin-bottom: 0.5rem;

    &:nth-child(3) {
      margin-bottom: 1.5rem;
    }
  }
  & input[type="submit"] {
    text-transform: uppercase;
    display: inline-block;
    width: auto;
    align-self: flex-start;
    margin-left: 1rem;
    max-width: 47%;
    font-size: 0.6rem;
    cursor: pointer;
    position: relative;
    box-shadow: 0 4px rgb(255, 255, 255);
    outline: none;
    background: blue;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    letter-spacing: 1.8px;

    &:hover {
      top: 2px;
      box-shadow: 0 2px rgb(255, 255, 255);
    }

    &:active {
      box-shadow: 0 0 rgb(255, 255, 255);
      top: 4px;
    }
  }
`;
class AddFriendsForm extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.edit ? "Edit Friend" : "Add Friend"}</h2>
        <StyledForm onSubmit={this.props.addFriend}>
          <input
            type="text"
            name="name"
            onChange={this.props.handleChange}
            placeholder="Enter Friends Name..."
            value={this.props.name}
          />
          <input
            type="text"
            name="age"
            onChange={this.props.handleChange}
            placeholder="Enter Friends Age..."
            value={this.props.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.props.handleChange}
            placeholder="Enter Friends Email..."
            value={this.props.email}
          />
          <input type="submit" value="Add Friend" />
        </StyledForm>
      </div>
    );
  }
}

export default AddFriendsForm;
