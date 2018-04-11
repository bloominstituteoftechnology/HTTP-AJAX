import React, { Component } from "react"
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap"
import { makePost } from "../../utils"

const post = makePost("http://localhost:5000")
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
    return e => this.setState({ [property]: `${e.target.value}` })
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

  handleSubmit(e) {
    // clearly whatever the user inputs is valid. CLEARLY
    post("/friends", this.state)
    alert(JSON.stringify(this.state))
    e.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <FormGroup row>
          <Label for="name">
            Name:{" "}
            <Input
              type="name"
              name="name"
              placeholder="Kim Kardashian"
              value={this.state.name}
              onChange={e => this.onNameChange(e.nativeEvent)}
            />
          </Label>
        </FormGroup>
        <FormGroup row>
          <Label for="age">
            Age:{" "}
            <Input
              type="age"
              name="age"
              placeholder="32135486"
              value={this.state.age}
              onChange={e => this.onAgeChange(e.nativeEvent)}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="email">
            Email:{" "}
            <Input
              type="email"
              name="email"
              placeholder="dont@me.net"
              value={this.state.email}
              onChange={e => this.onEmailChange(e.nativeEvent)}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Button type="submit" value="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    )
  }
}
