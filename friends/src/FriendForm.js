import React from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.a`
  display: inline-block;
  border-radius: 4px;
  padding: 0.5rem 0;
  margin: 0.5rem 0rem;
  width: 11rem;
  background: green;
  color: white;
  border: 2px solid white;
`;

const Input = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 0rem;
  width: 50%;
  background: white;
  color: black;
  border: 1px solid black;
  text-align: left;
`;


const FriendForm = props => {
  return (
    <div className="formDiv">
      <form className="formForm">
      <h1>Add a New Friend</h1>
      <Input
          className="styled.input"
          type="text"
          name="nameText"
          placeholder="   friend's name"
        />

        <Input
          type="text"
          name="ageText"
          placeholder="   friend's age"
        />
        <Input
          type="text"
          name="emailText"
          placeholder="   friend's email"
        />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};

export default FriendForm;
