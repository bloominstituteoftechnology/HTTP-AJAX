import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from "./components/FriendsList";
import AddForm from "./components/AddForm";

  
export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      friends: [], 
      name: "",
      age: 0,
      enail:""
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }));
      
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault(); 
    let newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age
    }
    axios.post("http://localhost:5000/friends",newFriend)
      .then(response => console.logr(response));
  }

  render() {
    return (
      <div>
        <h1> home</h1>
        <AddForm input={this.handleInput.bind(this)} />
    <FriendsList friends={this.state.friends} />    
      </div>
    )
  
  }
}