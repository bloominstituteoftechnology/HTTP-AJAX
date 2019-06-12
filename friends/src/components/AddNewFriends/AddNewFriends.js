import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.form`
  width: 400px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.2rem;
    text-align: left;
    margin: 0.5rem 0;
  }

  input {
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 1.2rem;
  }

  button {
    margin: 1rem auto;
    text-decoration: none;
    width: 60%;
    padding: 1rem 2rem;
    outline: none;
    color: white;
    background-color: blue;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      color: blue;
      background-color: white;
    }
  }
`;

class AddNewFriends extends Component {
  render() {
    return (
      <div>
        <Form>
          <h2>Add New Friend</h2>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter name" />
          <label>Email</label>
          <input type="text" name="email" placeholder="Enter email" />
          <label>Location</label>
          <input type="text" name="location" placeholder="Enter loaction" />
          <label>Age</label>
          <input type="number" name="age" placeholder="Enter age" />
          <button type="submit">Add</button>
        </Form>
      </div>
    );
  }
}

export default AddNewFriends;
