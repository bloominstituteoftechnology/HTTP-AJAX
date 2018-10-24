import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const AddForm = styled.div`
    width: 60%;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
`

class Add extends React.Component {
  state = {
    name: '',
    age: '',
    email: ''
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleAgeChange = event => {
    this.setState({ age: event.target.value });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();



    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <AddForm>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleNameChange} />
          </label>
          <label>
            Age:
            <input type="text" name="age" onChange={this.handleAgeChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleEmailChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </AddForm>
    )
  }
}

export default Add;