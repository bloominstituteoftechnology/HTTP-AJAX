import React, { Component } from 'react'
import { post } from 'axios'

class NewFriendForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  setName = e => { 
    const { value: name } = e.target
    this.setState({name})
  }
  
  setAge = e => { 
    const { value: age } = e.target
    this.setState({age})
  }

  setEmail = e => { 
    const { value: email } = e.target
    this.setState({email})
  }

  submit = e => { 
    const { state: newFriend } = this
    post('http://localhost:5000/friends', newFriend)
      .then(r => console.log('yay!', r))
      .catch(e => console.log('uh oh:', e))
    
    this.setState({name: '', age: '', email: ''})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.setName} placeholder="name" />
        <input type="text" onChange={this.setAge} placeholder="age" />
        <input type="text" onChange={this.setEmail} placeholder="email" />
        <button onClick={this.submit}>add new friend</button>
      </div>
    )
  }
}

export default NewFriendForm
