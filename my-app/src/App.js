import React, { Component } from 'react'
import './App.css'
import FriendsCard from './Components/FriendsCard'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      friends: []
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

  render () {
    return (
      <div className='App'>
        <FriendsCard friends={this.state.friends} />
      </div>
    )
  }
}

export default App
