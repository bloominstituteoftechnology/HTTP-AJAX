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
      friend: {
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
        friend: {
          ...prevState.friend,
        [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = e => {
    console.log("Submitted!")
    e.preventDefault();
    axios
      .post(`http://localhost:5000/friends`, this.state.friend)
      .then(response => {
        this.setState({friendsList: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteFriend = (e, idx) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${idx}`)
      .then(response => {
        this.setState({friendsList: response.data})
      })
      .catch(err => console.log(err))
  }

  updateFriend = (e, idx) => {
    e.preventDefault();
    this.setState({friend: this.state.friendsList.find(item => item.id === idx)})
  }

  render() {
    return (
      <div className="App">
        <Link to="/" >Friends List</Link>
        <Link to="/friend-form">Friend Form</Link>
        <h1>Friends:</h1>
        {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
        <Route 
        path= "/"
        render={props =>
          <FriendList 
            {...props} 
            friendsList={this.state.friendsList}
            deleteFriend={this.deleteFriend}
            updateFriend={this.updateFriend}
            />}
        />
        <Route
        path="/friend-form"
        render={props =>
          <FriendForm 
            {...props} 
            friend={this.state.friend} 
            handleChanges={this.handleChanges} 
            addFriend={this.addFriend}/>}
        />
      </div>
    )
  }
}
export default App;
