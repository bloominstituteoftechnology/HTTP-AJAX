import React, { Component } from 'react'
import axios from 'axios'

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
        {
          friends.map(friend => {
            return (
              <div key={friend.id}>
                <h1>{friend.name}</h1>
                <h3>{friend.email}</h3>
                <p>{friend.name} is {friend.age} years old.</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App
