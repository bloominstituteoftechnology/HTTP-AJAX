import React, { Component } from 'react'
import { get } from 'axios'

class Friends extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount(){ 
    get('http://localhost:5000/friends')
      .then(({ data }) => this.setState({friends: data}))
      .catch(err => console.log("error:", err))
  }

  render() {
    const { friends } = this.state
    return (
      friends.map(friend => <p key={friend.name}>{friend.name}</p>)
    )
  }
}

export default Friends
