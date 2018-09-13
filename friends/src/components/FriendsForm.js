import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const FriendsForm  = (props) => {
   return (
      <FormContainer>
        <StyledForm>
          <h1>FRIENDSLIST</h1>
          <div>
            <input
              onChange={props.handleInput}
              value={props.input.name}
              name="name"
            />
            <input
              onChange={props.handleInput}
              value={props.input.age}
              name="age"
            />
            <input
              onChange={props.handleInput}
              value={props.input.email}
              name="email"
            />
            <StyledButton type="button" onClick={props.postFriend}>
              Post Friend
            </StyledButton>
            <FriendsCounter>{props.friends && props.friends.length}</FriendsCounter>
          </div>
        </StyledForm>
      </FormContainer>
    );
  
}

export default FriendsForm;

const FormContainer = styled.div`
  background: ${props => props.theme.colors.mainColor};
  width:100%;
  position: fixed;
  top: 0;
  z-index: 1;
  font-family: impact;
  font-size: 32px;
  color: ${props => props.theme.colors.sideColorLight1};
  border-bottom: 3px solid ${props => props.theme.colors.sideColorLight2};
  letter-spacing: 5PX;
`;

const StyledForm = styled.form`
margin: auto;
width: 1000px;
padding: 10px 0
display:flex;
justify-content: space-between;
align-items:center;
div{
    display:flex;
justify-content: space-between;
align-items:center;
}

input{
   
    margin: auto 5px;
}

`;

const StyledButton = styled.button`
  width: 78px;
  font-family: impact;
  border: 1px solid ${props => props.theme.colors.sideColorLight1};
  background: ${props => props.theme.colors.sideColorLight1};
  color: ${props => props.theme.colors.mainColor};

  :hover {
    font-weight: bold; 
  }
`;

const FriendsCounter = styled.h1 `
margin: 0 0 0 20px;
font-size 44px;
`
