import React, { Component } from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

const StyledInput = styled.input`
  display: block;
  margin: .5rem auto;
  padding: .5rem 1rem;
  border: none;
  border-bottom: 2px solid rgba(0, 49, 116, .5);
  width: 15rem;
  box-shadow: 0 0 20px rgba(0,0,0, .1);

  &:focus, &:active {
    outline: none;
    border-bottom: 2px solid rgba(0, 49, 116, .9);
  }
`

const StyledButton = styled.button`
  padding: .75rem 1.5rem;
  background: rgb(161, 21, 29);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0, .1);
  border-radius: .4rem;
`

export default class NewFriendForm extends Component {

  newNameInput = React.createRef();

  newAgeInput = React.createRef();

  newEmailInput = React.createRef();

  addNewFriend = (e) => {
    e.preventDefault()
    const friend = {
      name: this.newNameInput.current.value,
      age: this.newAgeInput.current.value,
      email: this.newEmailInput.current.value
    };
    this.props.addNewFriend(friend);
  } 

  render() {
    return (
      <div>
        {this.props.isLoading && (<p>...Loading</p>)}  
        <h1>Add New Friend</h1>
        <StyledForm onSubmit={this.addNewFriend}>
          <StyledInput type='text' ref={this.newNameInput} placeholder='Name'/>
          <StyledInput type='number' ref={this.newAgeInput} placeholder='Number'/>
          <StyledInput type='email' ref={this.newEmailInput} placeholder='Email'/>
          <StyledButton onClick={this.addNewFriend}>
            Add Friend
          </StyledButton>
        </StyledForm>
      </div>
    );
  }
}

