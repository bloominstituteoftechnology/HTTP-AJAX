import React, { Component } from 'react';
import Friends from './Components/Friends';
import NewFriendForm from './Components/NewFriendForm';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      Name: "",
      Age: 0,
      Email: ""
    };
  }
  handleUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }) );
      })
      .catch(error => {
        console.error('Server Error',error );
      });
  }

  render() {
  return (
  <div className>
  <Friends friends={this.state.friends} />
  <NewFriendForm handleUpdate={this.handleUpdate} />
  <button>Delete</button>
  </div>
  );
  }
}

export default App;
