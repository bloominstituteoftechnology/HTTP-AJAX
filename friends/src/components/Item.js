import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Line } from '../styles/Card'
import { Input } from '../styles/Item'

class Item extends Component {
  state = {
    edit: false,
    value: this.props.children
  }

  textInput = React.createRef()

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentDidUpdate() {
    if (this.state.edit) {
      this.focusTextInput()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  // Set wrapper ref
  setWrapperRef = node => {
    this.wrapperRef = node
  }

  // Alert if clicked on outside of element
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        edit: false,
        value: this.props.children
      })
    }
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  handleClick = event => {
    this.setState({ edit: true })
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { id, field, updateFriends } = this.props

    axios
      .put(`http://localhost:5000/friends/${id}`, { [field]: this.state.value })
      .then(res => updateFriends(res.data))
      .catch(err => console.log(err))
  }

  render() {
    const { children } = this.props
    const { edit, value } = this.state
    const { handleClick, handleChange, handleSubmit } = this

    return (
      <Fragment>
        {edit === false ? (
          <Line onClick={handleClick}>{children}</Line>
        ) : (
          <form onSubmit={handleSubmit} ref={this.setWrapperRef}>
            <Input value={value} onChange={handleChange} ref={this.textInput} />
          </form>
        )}
      </Fragment>
    )
  }
}

export default Item
