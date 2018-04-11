import React, { Component } from "react"

export default class AddFriendForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: "",
      email: ""
    }
  }

  /**
   * @param {string} property
   * @returns {function}
   * @memberof AddFriendForm
   */
  onChange(property) {
    // return a function that will apply the value to whatever property is defined
    // look up 'currying' in functional programming
    return e => this.setState({ [property]: e.target.value })
  }

  onNameChange(e) {
    this.onChange("name")(e)
  }

  onAgeChange(e) {
    this.onChange("age")(e)
  }

  onEmailChange(e) {
    this.onChange("email")(e)
  }

  render() {
    return (
      <form>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.onNameChange(e.nativeEvent)}
          />
        </label>
        <label htmlFor="age">
          Age:{" "}
          <input
            type="text"
            value={this.state.age}
            onChange={e => this.onAgeChange(e.nativeEvent)}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.onEmailChange(e.nativeEvent)}
          />
        </label>
      </form>
    )
  }
}
