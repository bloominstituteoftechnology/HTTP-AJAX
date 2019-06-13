import React, { Component } from "react"
import axios from "axios"

import "./App.css"

import Friend from "./component/Friend";
import FriendForm from "./component/FriendForm"

class App extends Component {
  state = {
    friends: [],
    currentFriend: {
      name: "",
      age: "",
      email: ""
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  updateFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  setCurrentFriend = (name, value) => {
    this.setState({
      currentFriend: {
        ...this.state.currentFriend,
        [name]: value
      }
    })
  }

  getCurrentFriend = friend => {
    this.setState({ currentFriend: friend })
  }

  render() {
    const { friends } = this.state
    return (
      <div className="App">
        <h1>Friends Page</h1>

        <FriendForm
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          setCurrentFriend={this.setCurrentFriend}
          friend={this.state.currentFriend}
        />

        {friends.map(friend => (
          <Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            id={friend.id}
            getCurrentFriend={this.getCurrentFriend}
            deleteFriend={this.deleteFriend}
          />
        ))}
      </div>
    )
  }
}

export default App