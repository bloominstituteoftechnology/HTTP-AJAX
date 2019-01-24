import React from 'react';
import styled from 'styled-components';

const InputFormContainer = styled.div`
  border: 1px solid blue;
  max-width: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 400px;
  border: 1px solid #474B4F;
  border-radius: 5px;
  background-color: #6B6E70;
`;

class InputForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = e => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name] : e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postToServer(this.state.info);
    this.setState({
      info: {
        name: '',
        age: '',
        email: ''
      }
    });
  };

  render (){
    return (
      <InputFormContainer>
        <Form onSubmit={this.handleSubmit}>
          <input type='text' name='name' onChange={this.handleChange} value={this.state.info.name} placeholder='Name'/>
          <input type='text' name='age' onChange={this.handleChange} value={this.state.info.age} placeholder='Age'/>
          <input type='text' name='email' onChange={this.handleChange} value={this.state.info.email} placeholder='Email'/>
          <button type='submit'>Add/Update</button>
        </Form>
      </InputFormContainer>
    );
  }
}

export default InputForm;
