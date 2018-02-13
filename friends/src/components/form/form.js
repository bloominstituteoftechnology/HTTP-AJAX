import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  h1 {
    margin-top: 0;
  }
  form {
    input {
      width: 200px;
      height: 20px;
      display: block;
      margin: 0 auto;    
      padding-left: 15px;
      &:focus: {
        outline: 0;
      }
    }  
  }
  button {
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledDiv>
        <h1>Post New Friend</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type='text' name='name' 
            placeholder='Name' 
            value={this.props.name} 
            onChange={this.props.handleChange} 
            required 
          />
          <input 
            type='number' 
            name='age' 
            placeholder='Age' 
            value={this.props.age} 
            onChange={this.props.handleChange} 
            required 
          />
          <input 
            type='email' 
            name='email' 
            placeholder='Email' 
            value={this.props.email} 
            onChange={this.props.handleChange} 
            required 
          />
          <button type='submit'>
            Submit
          </button>
        </form>
      </StyledDiv>
    );
  }

}

export default Form;
