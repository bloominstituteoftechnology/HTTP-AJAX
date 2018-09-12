import React from 'react'

class FriendForm extends React.Component {
  constructor(){
    super()
    this.state = {
      realName: '',
      age: '',
      email: '',
    }
  }

  formChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form>
        <input
          name="realName"
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
