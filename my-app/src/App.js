import React, { Component } from 'react'
import './App.css'
import FriendsList from './Components/FriendsList'
import AddFriendInput from './Components/AddFriendInput'
import { Route } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      friends: [],
      newFriend: ''
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => {
        console.log('data', response)
        this.setState({ friends: response.data })
      })
      .catch((err) => console.log(err))
  }

  handleChange = (e) => {
    this.setState({
      newFriend: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newFriend = {
      name: this.state.newFriend,
      age: Math.floor(Math.random() * 100 + 1),
      email: `${Math.random().toString(36).replace(/[^a-z]+/g, '')}@gmail.com`
    }
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then((response) => {
        console.log('post response', response)
        this.setState({ friends: response.data, newFriend: '' })
      })
      .catch((error) => console.log(error))
  }

  render () {
    return (
      <div className='container'>
        <AddFriendInput
          value={this.state.newFriend}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Route
          exact
          path='/'
          render={(props) => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    )
  }
}

export default App
