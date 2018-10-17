import React, { Component, Fragment } from 'react'
import { Line } from '../styles/Card'
import { Input } from '../styles/Item'

class Item extends Component {
  state = {
    edit: false,
    value: this.props.children
  }

  handleClick = event => {
    console.log('clicked')
    this.setState({ edit: true })
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { children } = this.props
    const { edit, value } = this.state
    const { handleClick, handleChange } = this

    return (
      <Fragment>
        {edit === false ? (
          <Line onClick={handleClick}>{children}</Line>
        ) : (
          <Input value={value} onChange={handleChange} />
        )}
      </Fragment>
    )
  }
}

export default Item
