import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friendsList: [],
      errorMessage: ""
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then(response => {
      this.setState({friendsList: response.data})
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMessage: error.message})
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
        {this.state.friendsList.map(friend => {
          return <div>{friend.name}, age: {friend.age}, email: {friend.email}</div>
        })}
      </div>
    );
  }
}
export default App;
