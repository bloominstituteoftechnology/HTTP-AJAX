import React, { Component } from 'react'
import axios from 'axios'
import Friend from './Friend'
import FriendForm from './FriendForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        const friends = response.data;
        this.setState({ friends});
      })
  }

  render() {
    const {friends} = this.state
    return (
      <div className="App">
        <h1>Axios Friends</h1>
        
        <FriendForm />

        {
          friends.map(friend => {
            return (
              <Friend key={friend.id} friend={friend} />
            )
          })
        }
      </div>
    )
  }
}

export default App
