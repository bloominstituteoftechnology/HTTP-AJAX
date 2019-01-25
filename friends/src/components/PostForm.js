import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 400px;
  border: 1px solid #474B4F;
  border-radius: 5px;
  background-color: #6B6E70;
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
        <input type='text' name='name' onChange={this.handleChange} value={this.state.info.name} placeholder='Name'/>
        <input type='text' name='age' onChange={this.handleChange} value={this.state.info.age} placeholder='Age'/>
        <input type='text' name='email' onChange={this.handleChange} value={this.state.info.email} placeholder='Email'/>
        <button type='submit'>Add</button>
      </Form>
    );
  }
}

export default PostForm;
