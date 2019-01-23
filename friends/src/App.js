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
      this.setState({errorMessage: error})
    })
  }

  render() {
    return (
      <div className="App">
        hello world!
      </div>
    );
  }
}
export default App;
