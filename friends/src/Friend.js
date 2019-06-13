import React from 'react'

class Friend extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  render () {
    return (
      <div className='friendCard'>
        <h2>My name is: {this.props.friends.name}</h2>
        <h2>I am {this.props.friends.age} years old</h2>
        <h2>My email is: {this.props.friends.email}</h2>
      </div>
    )
  }
}

export default Friend
