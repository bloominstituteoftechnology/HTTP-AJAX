import React from 'react'

class AddFriend extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Friend: </label>
          <input
            placeholder="Name"
            type="text"
            value={this.state.friendName}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="Age"
            type="text"
            value={this.state.friendAge}
            onChange={this.handleInputChange}
          />
          <input
            placeholder="Email Address"
            type="text"
            value={this.state.friendEmail}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default AddFriend;