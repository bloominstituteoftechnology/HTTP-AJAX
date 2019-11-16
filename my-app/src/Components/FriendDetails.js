import React, { Component } from 'react'
import axios from 'axios'

class FriendDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      name: '',
      age: '',
      email: ''
    }
  }

  handleDelete = () => {
    axios
      .delete(`http://localhost:5000/friends/${this.props.match.params.id}`)
      .then((res) => this.props.getFriends())
      .catch((err) => console.log(err))
    this.props.history.push('/')
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, age, email } = this.state
    axios
      .put(`http://localhost:5000/friends/${this.props.match.params.id}`, {
        age,
        name,
        email
      })
      .then((res) => this.props.getFriends())
      .catch((err) => console.log(err))
    this.setState({ editing: false })
  }

  filterFriends = () => {
    return this.props.friends.filter((friend) => {
      return friend.id === Number(this.props.match.params.id)
    })[0]
  }

  componentDidMount () {
    const friend = this.filterFriends()
    this.setState({
      name: friend.name,
      age: Number(friend.age),
      email: friend.email
    })
  }

  handleEdit = () => {
    this.setState({
      editing: true
    })
  }
  render () {
    const myFriend = this.filterFriends()
    return (
      <div>
        <button onClick={() => this.props.history.push('/')}>Back</button>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>Edit</button>
        {this.state.editing ? (
          <form onSubmit={this.handleSubmit}>
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Update name'
            />
            <input
              name='age'
              type='number'
              value={this.state.age}
              onChange={this.handleChange}
              placeholder='Update age'
            />
            <input
              name='email'
              type='text'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='Update email'
            />
            <button type='submit'>Submit</button>
          </form>
        ) : (
          <div>
            <div>{myFriend.name}</div>
            <div>{myFriend.age}</div>
            <div>{myFriend.email}</div>
          </div>
        )}
      </div>
    )
  }
}

export default FriendDetails
