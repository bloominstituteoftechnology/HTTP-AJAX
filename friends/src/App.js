import React, { Component } from "react"
import axios from "axios"

import "./App.css"
import FriendsList from "./components/FriendsList"
import FriendForm from "./components/FriendForm"

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  addFriend(newFriend, e) => {
    console.log(newFriend)

    e.preventDefault()
    
    const friends = [...this.state.friends, newFriend]
    axios.post( 'http://localhost:5000/friends', { friends 
      .then(response => {
        this.setState({
          friends: friends
        })
      })
      
    })
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(error => console.log("error"))
  }
  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendsList friends={this.state.friends} />
        <FriendForm addFriend={this.addFriend} />
      </div>
    )
  }
}

export default App
