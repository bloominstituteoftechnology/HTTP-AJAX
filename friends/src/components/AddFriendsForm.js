import React from "react";
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
const AddFriendsForm = props => {
  return (
    <StyledForm onSubmit={props.addFriend}>
      <input
        type="text"
        name="name"
        onChange={props.handleChange}
        placeholder="Enter Friends Name..."
        value={props.name}
      />
      <input
        type="text"
        name="age"
        onChange={props.handleChange}
        placeholder="Enter Friends Age..."
        value={props.age}
      />
      <input
        type="text"
        name="email"
        onChange={props.handleChange}
        placeholder="Enter Friends Email..."
        value={props.email}
      />
      <input type="submit" value="Add Friend" />
    </StyledForm>
  );
};

export default AddFriendsForm;
