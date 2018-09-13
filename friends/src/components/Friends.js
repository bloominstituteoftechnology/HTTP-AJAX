import React from 'react';
import Friend from './Friend';
import './Friends.css';
import axios from 'axios';

export default class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewFriend = () => {
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email,
    }
  )
  .catch(err => console.log(new Error(err)))
  }

  render(){
    return (
      <div>
        <h1>Friends List</h1>
        <form className="centered-form">
          <h2>Add a friend</h2>
            <input onChange={this.handleChange} type="text" name="name" placeholder="Enter name here..." />
            <input onChange={this.handleChange} type="text" name="age" placeholder="Enter age here..." />
            <input onChange={this.handleChange} type="text" name="email" placeholder="Enter email here..." />
            <input onClick={this.addNewFriend} type="submit" value="Submit" className="submit" />
      </form>
        {this.props.friends.map(friend => <Friend key={friend.name} friend={friend} />)} 
      </div>

    );
  }
};
