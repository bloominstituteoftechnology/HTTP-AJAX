import React from 'react'
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

export default () => (
  <div>
    <h1>Add New Friend</h1>
    <StyledForm>
      <StyledInput type='text' placeholder='Name'/>
      <StyledInput type='number' placeholder='Number'/>
      <StyledInput type='email' placeholder='Email'/>
      <StyledButton>
        Add Friend
      </StyledButton>
    </StyledForm>
  </div>
)
