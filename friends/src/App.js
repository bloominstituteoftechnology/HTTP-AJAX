import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import Form from './components/Form';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }


  setData = data => {
    this.setState({ friendsData: data })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      console.log(response);
      this.setData(response.data);
    }).catch(err => {
      console.log(err);
    });
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  
  handleSubmit = e => {
    e.preventDefault();
    const friend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email
    };
    axios.post('http://localhost:5000/friends', friend).then(create => {
      this.setState({ friendsData: create.data });
    }).catch(error => {
      console.log(error);
    });
  }

  handleDelete = id => {
    axios
      .delete(`${'http://localhost:5000/friends'}/${id}`)
      .then(poop => {
        console.log(poop);
        this.setData(poop.data);
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>REACT FRIENDS LIST</h1>
        <FriendsList friends={this.state.friendsData} handleDelete={this.handleDelete}/>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
