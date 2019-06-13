import React, { Component } from "react"

class FriendForm extends Component {
  handleChange = e => {
    this.props.setCurrentFriend(e.target.name, e.target.value)
  }

  addOrUpdateFriend = e => {
    e.preventDefault()
    if (this.props.friend.id) {
      this.props.updateFriend(this.props.friend.id, this.props.friend)
    } else {
      this.props.addFriend(this.props.friend)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Add a new friend:</h3>
        <form onSubmit={this.addOrUpdateFriend}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.props.friend.name}
          />
          <p>Age</p>
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.props.friend.age}
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.props.friend.email}
          />
          <button type="submit">
            {this.props.friend.id ? "Update" : "Add"}
          </button>
        </form>
      </div>
    )
  }
}



export default FriendForm