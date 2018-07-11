import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
    console.log(response);
    this.setState({friends: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  friendName = e => {
    this.setState({name : e.target.value})
  }

  friendAge = e => {
    this.setState({age : e.target.value})
  }

  friendEmail = e => {
    this.setState({email : e.target.value})
  }

  newFriend = () => {
    const friend = {name: this.state.name, age: this.state.age, email: this.state.email}
    axios.post('http://localhost:5000/friends', friend)
    .then(response => this.setState({friends : response.data}))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <form>
        <input
        type='text'
        name='friend'
        placeholder='name'
        value={this.state.name}
        onChange={this.friendName}
        />

        <input
        type='number'
        name='age'
        placeholder='age'
        value={this.state.age}
        onChange={this.friendAge}
        />

        <input
        type='email'
        name='email'
        placeholder='email'
        value={this.state.email}
        onChange={this.friendEmail}
        />
        <button onClick={this.newFriend}>Submit</button>
        </form>
        
          {this.state.friends.map(item => {
            return <p key={item.id}>Name: {item.name} <br /> Age: {item.age} <br /> Email: {item.email} <br /></p>
          })}
  
      </div>
    );
  }
}

export default App;
