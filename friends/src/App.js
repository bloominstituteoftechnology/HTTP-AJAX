import React, { Component } from "react"
import { Route } from "react-router-dom"
import "./App.css"
import FriendsList from "./components/FriendsList"
import { get, post } from "axios"

const serverUrl = "localhost:5000"

const helper = async path =>
  await get(`http://${serverUrl}${path}`).then(data => data)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }

  setInitialState() {
    const friends = helper("/friends")
    friends.then(({ data }) =>
      this.setState(prevState => ({ friends: [...data] }))
    )
  }

  componentDidMount() {
    this.setInitialState()
  }
  render() {
    return (
      <div className="App">
        <Route path="/" />
      </div>
    )
  }
}

export default App
