import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {Route, Link} from "react-router-dom"

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friendsList: [],
      errorMessage: "",
      isUpdating: false,
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

  addFriend = () => {
    axios
      .post(`http://localhost:5000/friends`, this.state.friend)
      .then(response => {
        this.setState({friendsList: response.data})
        this.props.history.push("/")
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

  populateForm = (e, idx) => {
    e.preventDefault();
    this.setState({friend: this.state.friendsList.find(item => item.id === idx),
    isUpdating: true
    });
    this.props.history.push("/friend-form");
  }

  updateFriend = () => {
    console.log("updating!")
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
      .then(response => {
        this.setState({
          friendsList: response.data,
          isUpdating: false,
          friend: {
            name: "",
            age: null,
            email: "",
          }
        })
      })
      .catch(err => console.log(err))
      this.props.history.push("/");
  }

  render() {
    return (
      <div className="App">
        <Link exact to="/" >Friends List</Link>
        <Link to="/friend-form">Friend Form</Link>
        {this.state.errorMessage && <h4>{this.state.errorMessage}</h4>}
        <Route 
        exact path= "/"
        render={props =>
          <FriendList 
            {...props} 
            friendsList={this.state.friendsList}
            deleteFriend={this.deleteFriend}
            populateForm={this.populateForm}
            />}
        />
        <Route
        path="/friend-form"
        render={props =>
          <FriendForm 
            {...props} 
            friend={this.state.friend} 
            handleChanges={this.handleChanges} 
            addFriend={this.addFriend}
            isUpdating={this.state.isUpdating}
            updateFriend={this.updateFriend}
          />}
        />
      </div>
    )
  }
}
export default App;
