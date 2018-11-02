import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import Friend from './Friend.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        id: 0,
        age: '',
        email: ''
      }
    }
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log('It works') // confirming things work, will comment out on submission
        console.log(response.data)
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err))
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    })
  }

  enterHandler (event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed')
    }
  }

  addFriend = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => this.setState({ friends: response.data }))
  }

  updateFriend = (event, id) => {
    event.preventDefault();
    axios
    .put(`http://localhost:5000/friends/${id}`, this.state.newFriend)    
    .then(response => this.setState({ friends: response.data}));
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  render () {
    return (
      <div className='App'>
        <form onSubmit={this.changeHandler}>
          <input
            type='text'
            onChange={this.changeHandler}
            name='name'
            placeholder='Input Name'
            value={this.state.newFriend.name}
          />
          <input
            type='number'
            onChange={this.changeHandler}
            name='age'
            placeholder='Input Age'
            value={this.state.newFriend.age}
          />
          <input
            type='email'
            onChange={this.changeHandler}
            name='email'
            placeholder='Input Email'
            value={this.state.newFriend.email}
          />
        </form>
        <button onClick={this.addFriend}>Add a new friend</button>
        <button onClick={this.updateFriend}>Update Friend info</button>
        <button onClick={this.deleteFriend}>Delete Friend from list</button>
        {this.state.friends.map(friends => (
          <Friend key={friends.id} friends={friends} />
        ))}
      </div>
    )
  }
}

export default App
