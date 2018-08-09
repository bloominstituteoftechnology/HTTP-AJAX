import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      age: 0,
      email: "",
      id: null
    }
  }

  addFriendHandler = e => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        id: this.state.id
      })
      .then(response => {
        alert("Success!");
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  updateFriend = e => {
    axios
      .put(`http://localhost:5000/friends/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
        id: this.state.id
      })
      .then(response => {
        alert("Updated!");
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  editInput = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="form-wrapper">
        <form>
          id: <input type="number" name="id" placeholder="0" onChange={this.editInput}/><br/>
          Name: <input type="text" name="name" onChange={this.editInput}/><br/>
          Age: <input type="number" name="age" placeholder="0" onChange={this.editInput}/><br/>
          Email: <input type="email" name="email" onChange={this.editInput}/><br/>
          <button type="submit" onClick={this.addFriendHandler}>Add Friend</button>
          <button type="submit" onClick={this.updateFriend}>Update Friend</button>
        </form>

        <Link className="friend-card home-btn" to="/">Home</Link>
      </div>
    );
  }
}

export default Form;
