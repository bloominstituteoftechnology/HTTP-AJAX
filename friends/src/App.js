import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './List';
import Add from './Add';


class App extends Component {
  state = {
    friends: [],
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
      .then(res => {axios.get('http://localhost:5000/friends')
        .then(res => {
          const friends = res.data;
          this.setState({ friends: friends})
        })})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      axios.get(`http://localhost:5000/friends`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })

      document.getElementById("addForm").reset();

  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(res => {
        const friends = res.data;
        this.setState({ friends });
      })
  }

  render() {
    return (
      <div>
        <Add submit={this.handleSubmit} name={this.handleNameChange} age={this.handleAgeChange} email={this.handleEmailChange}/>
        <List friends={this.state.friends} />
      </div>
    )
  }
}

export default App;
