import React from 'react'

class FriendForm extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      age: null,
      email: '',
    }
  }

  render() {
    return (
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit" />
      </form>
    )
  }
}

export default FriendForm