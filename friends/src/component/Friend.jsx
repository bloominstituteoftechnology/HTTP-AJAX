    
import React, { Component } from "react"

class Friend extends Component {
  render() {
    const { name, age, email, deleteFriend, id, getCurrentFriend } = this.props
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <button onClick={() => getCurrentFriend({ id, name, age, email })}>Update</button>
        <button onClick={() => deleteFriend(id)}>Delete</button>
      </div>
    )
  }
}

export default Friend