import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount= () => {
    axios
    .get(`http://localhost:5000/friends`)
    .then ( response => {
      this.setState({data: response.data})
    })
    .catch( err=> console.log(err))
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map( friend => {
          return <div>{friend.name}</div>
        })}
        

        <form>
          <h2>Add friend:</h2>
          <input type="text" placeholder="name"></input>
          <input type="number" placeholder="age"></input>
          <input type="email" placeholder="email"></input>
        </form>
      </div>
    );
  }
}

export default App;
