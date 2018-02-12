import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './Friends';

class App extends Component {
  state = {
    friends: [],
  }
  render() {
    return (
      <div className="App">
        <Friends name={this.state.friends.name} age={this.state.friends.name} eMail={this.state.friends.email}/>
      </div>
    );
  }
  componentWillMount() {
    axios
    .get('https://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.date})
    })
    .catch(error => {
      console.log('There was an error', error)
    })
  }
}

export default App;
