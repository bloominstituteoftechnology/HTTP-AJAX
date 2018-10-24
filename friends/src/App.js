import React, { Component } from "react"
import axios from "axios"

import "./App.css"
import FriendsList from "./components/FriendsList"

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(res => {
      this.setState({
        friends: res.data
      })
    })
  }
  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <h1>let's make a friends list</h1>
        <FriendsList friends={this.state.friends} />
      </div>
    )
  }
}

export default App
