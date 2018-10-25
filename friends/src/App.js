import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import FriendCard from './Friends/FriendCard';
import NewFriend from './Friends/NewFriend';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => {this.setState({ friends: response.data })})
      .catch(err => {
        console.log(err);
      })
    }

    submitHandler = (event) => {
      event.preventDefault();
      axios.post("http://localhost:5000/friends", { name: this.state.name, age: this.state.age, email: this.state.email })
        .then(response => this.setState({ friends: response.data }))
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      }) 
    }

  render() {
    return (
      <div className="App">
        <h1>You're not alone! :)</h1>
        <NewFriend 
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            name={this.state.name}
            age={this.state.age}
            email={this.state.email}
        />
        <h2>Friends List:</h2>
        <FriendCard friends={this.state.friends} /> 
      </div>
    );
  }
}

export default App;
