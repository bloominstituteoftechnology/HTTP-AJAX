import React, { Component } from 'react';
import Form from '../form/form.js';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`
  h1 {
    margin-top: 0;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
`;

class FriendsList extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(res => {
        console.log(res);
        this.setState({ name: '', age: '', email: '' }, () => this.getData())
      })
      .catch(error => {
        alert('There was an error: ', error);
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state.name));
  };
  
  getData = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      const friends = res.data;
      this.setState({ friends: friends });
    })
    .catch(error => {
      alert('There was an error:', error);
    });
  }
  
  render() {
    return (
      <StyledDiv>
        <h1>Friends</h1>
        {this.state.friends.map((val, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{val.name}</li>
                <li>{val.age}</li>
                <li>{val.email}</li>
              </ul>
            </div>
          )
        })}
        <Form
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          name={this.state.name} 
          age={this.state.age} 
          email={this.state.email}
        />
      </StyledDiv>
    );
  }

  componentDidMount() {
    this.getData();
  }
}

export default FriendsList;
