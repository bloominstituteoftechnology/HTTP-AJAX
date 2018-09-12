import React from 'react'

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  formChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    const newFriend = {
      name: this.state.name,
      age: Number(this.state.age),
      email: this.state.email,
      id: this.props.friends.length + 1
    }
    this.props.addFriend(newFriend)
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={this.state.username}
          onChange={this.formChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={this.formChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.formChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FriendForm
