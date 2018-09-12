import React, { Component } from 'react'
import axios from 'axios'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'

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
      .catch(err => console.log(err))
  }

  addFriend = (newFriend) => {
    const friends = [...this.state.friends, newFriend]
    this.setState({ friends })
    this.axiosPost(newFriend)
  }

  axiosPost = (newFriend) => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(console.log('Post request successful!'))
      .catch(err => console.log(err))
  }

  render() {
    const {friends} = this.state
    return (
      <div className="App">
        <h1>Axios Friends</h1>
        
        <FriendForm
          friends={this.state.friends}
          addFriend={this.addFriend}
        />

        {
          friends.map(friend => {
            return (
              <Friend
                key={friend.id}
                friend={friend}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App
