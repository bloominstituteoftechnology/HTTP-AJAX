import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 650px;
  height: 200px;
  border: 1px solid #474B4F;
  border-radius: 5px;
  background-color: #6B6E70;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 25px;
  width: 400px;
`;

const FormButton = styled.button`
  width: 200px;
  background-color: #86C232;
  color: #FFF;
  border: none;
  border-radius: 5px;
  font-size: 25px;
`;

class PostForm extends React.Component{
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
    setTimeout(this.props.removeSuccessMessage, 2000);
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
      <Form onSubmit={this.handleSubmit}>
        <StyledInput type='text' name='name' onChange={this.handleChange} value={this.state.info.name} placeholder='Name'/>
        <StyledInput type='text' name='age' onChange={this.handleChange} value={this.state.info.age} placeholder='Age'/>
        <StyledInput type='text' name='email' onChange={this.handleChange} value={this.state.info.email} placeholder='Email'/>
        <FormButton type='submit'>Add</FormButton>
      </Form>
    );
  }
}

export default PostForm;
