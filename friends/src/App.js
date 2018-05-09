import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: null,
      email: ''
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({friends:response.data})
      })
      .catch(err => {
         //if something goes wrong, we handle any errors here
      });
  }

  addFriend = () => {
    const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};
    axios
    .post(`http://localhost:5000/friends`, newFriend)
      .then()
    this.setState({name:'', age:null, email:''})
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <form className="add-friend" onSubmit={this.addFriend}>
          <input type="text" name="name" placeholder="name" onChange={this.handleInput}/>
          <input type="number" name="age" placeholder="age" onChange={this.handleInput}/>
          <input type="text" name="email" placeholder="email" onChange={this.handleInput}/>
          <input type="submit" value="Add Friend"/>
        </form>
        {this.state.friends.map((friend, i) => {
          return <Friend key={i} friend={friend}/>
        })}
      </div>
    );
  }
}

export default App;
