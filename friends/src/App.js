import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Friends from './components/Friends'
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
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err))
  }

  addFriend = (newFriend) => {
    this.setState({ friends: [...this.state.friends, newFriend] })
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
        
        <Navigation />

        <Route path='/friends' render={(props) => <Friends friends={friends} />} />
        <Route path='/add' render={(props) => <FriendForm friends={friends} addFriend={this.addFriend} />} />
      </div>
    )
  }
}

export default App
