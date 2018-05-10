import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DisplayFriends from './DisplayFriends';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      id: function () {
        return this.friends[this.friends.length - 1].id;
      }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then((response) => { this.setState({ friends: response.data }) })
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    let id = this.state.id() + 1;
    axios.post(`http://localhost:5000/friends`, { id: id, name: this.state.name, age: Number(this.state.age), email: this.state.email })
  }

  render() {
    console.log('Friends', this.state.friends);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Friends</h1>
        </header>
        <p>This displays a list of friends from the API</p>
        <DisplayFriends friends={this.state.friends} />

        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input name="name" type="text" value={this.state.name} placeholder="Type in your name" onChange={this.handleChange} /><br /><br />
            Age: <input name="age" type="number" min="1" value={this.state.age} placeholder="Type in your age" onChange={this.handleChange} /><br /><br />
            Email: <input name="email" type="email" value={this.state.email} placeholder="Type in your email" onChange={this.handleChange} /><br /><br />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div >
    );
  }
}

export default App;
