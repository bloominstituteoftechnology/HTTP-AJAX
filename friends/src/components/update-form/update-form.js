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
  .form__button {
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

class UpdateForm extends Component {
  render() {
    return (
      <StyledDiv>
        <h2>Update Friend</h2>
        <form onSubmit={this.props.handleUpdate}>
          <input
            type='text' 
            name='update_name' 
            placeholder='Update Name' 
            value={this.props.update_name} 
            onChange={this.props.handleChange} 
          />
          <input 
            type='number' 
            name='update_age' 
            placeholder='Update Age' 
            value={this.props.update_age} 
            onChange={this.props.handleChange} 
          />
          <input 
            type='text' 
            name='update_position' 
            placeholder='Update Position' 
            value={this.props.update_position} 
            onChange={this.props.handleChange} 
          />
          <input 
            type='email' 
            name='update_email' 
            placeholder='Update Email' 
            value={this.props.update_email} 
            onChange={this.props.handleChange} 
          />
          <button className='form__button' type='submit'>
            Submit
          </button>
        </form>
      </StyledDiv>
    );
  }

}

export default UpdateForm;