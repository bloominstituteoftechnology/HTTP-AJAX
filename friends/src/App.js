import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {Route} from "react-router-dom"

import FriendList from "./components/FriendList"

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
        <h1>Friends:</h1>
        {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
        <Route 
        path= "/"
        render={props =>
            <FriendList {...props} friendsList={this.state.friendsList} />}
            />
      </div>
    )
  }
}
export default App;
