import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {Route, Link} from "react-router-dom"

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super()
    this.state = {
      friendsList: [],
      errorMessage: "",
      newFriend: {
        name: "",
        age: "",
        email: "",
      }
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

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
        [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = e => {
    console.log("Submitted!")
    e.preventDefault();
    axios
      .post(`http://localhost:5000/friends`, this.state.newFriend)
      .then(response => {
        this.setState({friendsList: response.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Link to="/" >Friends List</Link>
        <Link to="/add-friend">Friend Form</Link>
        <h1>Friends:</h1>
        {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
        <Route 
        path= "/"
        render={props =>
          <FriendList 
            {...props} 
            friendsList={this.state.friendsList} />}
        />
        <Route
        path="/add-friend"
        render={props =>
          <FriendForm 
            {...props} 
            newFriend={this.state.newFriend} 
            handleChanges={this.handleChanges} 
            addFriend={this.addFriend}/>}
        />
      </div>
    )
  }
}
export default App;
