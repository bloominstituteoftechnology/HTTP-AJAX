import React, { Component } from 'react';
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
  form {
    input {
      width: 200px;
      height: 20px;
      display: block;
      margin: 0 auto;    
    }
    .field {
      padding-left: 15px;
    }  
    .submit {
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: 0;
      }
    }
  }
`;

class FriendsList extends Component {
  state = {
    friends: [],
    name: 'name',
    age: 100,
    email: 'email',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
      .then(res => {
      console.log('res');
      this.setState({
        name: '',
        age: '',
        email: '',
      }, () => console.log(this.state));
    })
    .catch(error => {
      alert('There was an error: ', error);
    });

  };

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
        <h1>Post New Friend</h1>
        <form onSubmit={this.handleSubmit}>
          <input className='field' type='text' placeholder='Name' />
          <input className='field' type='text' placeholder='Age' />
          <input className='field' type='text' placeholder='Email' />
          <button className='submit' type='submit'>Submit</button>
        </form>
      </StyledDiv>
    );
  }

  componentDidMount() {
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
}

export default FriendsList;
