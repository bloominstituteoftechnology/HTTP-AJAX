import React from 'react'
import PropTypes from 'prop-types'

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
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
      <React.Fragment>
        <h2>Add New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

FriendForm.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      id: PropTypes.number,
    })
  ),
  addFriend: PropTypes.func
}

export default FriendForm
