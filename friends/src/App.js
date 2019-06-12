    
import React, { Component } from "react"
import axios from "axios"

import "./App.css"

import FriendCard from "./component/Friend"
import FriendForm from "./component/FriendForm"

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  postFriend = friend => {
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

  render() {
    const { friends } = this.state
    return (
      <div className="App">
        <h1>Friends Page</h1>

        <FriendForm postFriend={this.postFriend} />

        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
            id={friend.id}
            updateFriend={this.updateFriend}
            deleteFriend={this.deleteFriend}
          />
        ))}
      </div>
    )
  }
}

export default App