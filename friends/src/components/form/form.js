import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

  h2 {
    margin-top: 20px;
  }

  form {
    input {
      width: 200px;
      height: 20px;
      display: block;
      margin: 0 auto;    
      padding-left: 15px;
      border-radius: 2px;
      &:focus {
        outline: 0;
      }
    }  
  }
  button {
    width: 100px;
    margin-top: 5px;
    padding: 6px 20px 6px 20px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 20px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);    
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
        <h2>Post New Friend</h2>
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
            type='text' 
            name='position' 
            placeholder='Position' 
            value={this.props.position} 
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
