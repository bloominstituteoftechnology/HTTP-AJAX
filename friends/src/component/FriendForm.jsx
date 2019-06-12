import React, { Component } from "react"

class FriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    }
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    })
  }

  postFriend = e => {
    e.preventDefault()
    this.props.postFriend(this.state.friend)
  }

  render() {
    return (
      <div>
        <h3>Add a new friend:</h3>
        <form onSubmit={this.postFriend}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <p>Age</p>
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default FriendForm