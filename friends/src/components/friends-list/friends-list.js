import React, { Component } from 'react';
import PostForm from '../post-form/post-form.js';
import UpdateForm from '../update-form/update-form.js';
import axios from 'axios';
import styled from 'styled-components';

const StyledDiv = styled.div`

  h1 {
    margin: 0 auto;
    font-size: 3em;
  }

  .friend__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .friend__entry {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 250px;
    margin: 20px;
    background-color: #ffffff;    
    border: 2px solid #000000;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }

  ul {
    margin-bottom: 7px;
    padding-left: 0;
    list-style: none;
  }

  li {
    margin-top: 3px;
  }

  .friend__buttons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .friend__delete-button, .friend__update-button {
    width: 80px;
    margin: 10px 0;
    padding: 5px 10px 6px 10px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 13px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);    
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: 0;
    }
  }
`;

class FriendsList extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    position: '',
    email: '',
    update_name: '',
    update_age: '',
    update_position: '',
    update_email: '',
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
        this.setState({ 
          name: '', 
          age: '',
          email: '',
          position: '',
          friends: res.data,
        });
      })
      .catch(error => {
        alert('There was an error: ', error);
      });
  }

  handleDelete = event => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${event.target.value}`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(error => {
        alert('There was an error: ', error);
      });
  }

  handleUpdate = event => {
    event.preventDefault();
    let update = {
      name: this.state.update_name,
      age: this.state.update_age,
      position: this.state.update_position,
      email: this.state.update_email,
    };
    for (let prop in update) {
      if (update[prop] === '') {
        delete update[prop];
      }
    }
    axios
    .put(`http://localhost:5000/friends/${event.target.value}`, {...update})
    .then(res => {
      this.setState({ 
        update_name: '',
        update_age: '',
        update_email: '',
        update_position: '',
        friends: res.data,
      });
    })
    .catch(error => {
      alert('There was an error: ', error);
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  getData = () => {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friends: res.data });
    })
    .catch(error => {
      alert('There was an error:', error);
    });
  }
  
  render() {
    return (
      <StyledDiv>
        <h1>Friends List</h1>
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
                <div className='friend__buttons'>
                  <button 
                    className='friend__delete-button'
                    value={val.id}
                    onClick={this.handleDelete}>
                    Remove
                  </button>
                  <button 
                    className='friend__update-button'
                    value={val.id}
                    onClick={this.handleUpdate}>
                    Update
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <PostForm
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          name={this.state.name} 
          age={this.state.age} 
          position={this.state.position}
          email={this.state.email}
        />
        <UpdateForm
          handleChange={this.handleChange} 
          handleUpdate={this.handleUpdate} 
          update_name={this.state.update_name} 
          update_age={this.state.update_age} 
          update_position={this.state.update_position}
          update_email={this.state.update_email}
        />
      </StyledDiv>
    );
  }

  componentDidMount() {
    this.getData();
  }
}

export default FriendsList;
