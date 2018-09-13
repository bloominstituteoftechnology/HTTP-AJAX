import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: "",
        age: "",
        email: ""
      }
    };
    console.log(this.state.input);
  }
  handleInput = event => {
    console.log(event.target.name);
    this.setState({
      input: { ...this.state.input, [event.target.name]: event.target.value }
    });
  };

  postFriend = () => {
    axios
      .post("http://localhost:5000/friends", {
        id: this.props.friends.length + 1,
        name: this.state.input.name,
        age: this.state.input.age,
        email: this.state.input.email
      })
      .then(response => {
        console.log(response);
        this.setState({
          input: {name: '', age:'', email:''}
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <FormContainer>
        <StyledForm>
          <h1>FRIENDSLIST</h1>
          <div>
            <input
              onChange={this.handleInput}
              value={this.state.input.name}
              name="name"
            />
            <input
              onChange={this.handleInput}
              value={this.state.input.age}
              name="age"
            />
            <input
              onChange={this.handleInput}
              value={this.state.input.email}
              name="email"
            />
            <StyledButton type="button" onClick={this.postFriend}>
              Post Friend
            </StyledButton>
            <FriendsCounter>{this.props.friends && this.props.friends.length}</FriendsCounter>
          </div>
        </StyledForm>
      </FormContainer>
    );
  }
}

export default FriendsForm;

const FormContainer = styled.div`
  background: ${props => props.theme.colors.mainColor};
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
