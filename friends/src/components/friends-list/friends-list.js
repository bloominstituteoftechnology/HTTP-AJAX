import React, { Component } from 'react';
import Form from '../form/form.js';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`

  h1 {
    margin-top: 0;
  }

  .friend__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .friend__entry {
    width: 250px;
    margin: 20px;
    background-color: #ffffff;    
    border: 2px solid #000000;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
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
    position: '',
    email: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        position: this.state.position,
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
    this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state.position));
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
        <div className='friend__container'>
          {this.state.friends.map((val, index) => {
            return (
              <div key={index} className='friend__entry'>
                <ul>
                  <li>{val.name}</li>
                  <li>{val.age}</li>
                  <li>{val.position}</li>
                  <li>{val.email}</li>
                </ul>
              </div>
            )
          })}
        </div>
        <Form
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          name={this.state.name} 
          age={this.state.age} 
          position={this.state.position}
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
