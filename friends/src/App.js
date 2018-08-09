import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
      loading: true,
    };
  }

componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then((response) => this.setState({friends: response.data }))
    .catch(error => console.error(error))
  }

inputHandler = event => {
  this.setState({ [event.target.name]:  event.target.value })
}

  render() {
    return (
      <div className="App">
        <h1>
          ( Friends )
        <AddFriend inputHandler = {this.inputHandler} 
        name = {this.state.name} 
        age = {this.state.age}
        email = {this.state.email} 
        />
        </h1>
        <Friends friends = {this.state.friends} />
      </div>
    );
  }
}

export default App

