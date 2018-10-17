import React, { Component } from 'react'
import axios from 'axios'
import { Container, Line, Close } from '../styles/Card'
import close from '../icons/close.png'

class Card extends Component {
  handleClose = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.props.updateFriends(res.data))
      .catch(err => console.log(err))
  }

  render() {
    const { id, name, age, email } = this.props
    const { handleClose } = this

    return (
      <Container>
        <Line>{name}</Line>
        <Line>{age}</Line>
        <Line>{email}</Line>
        <Close onClick={() => handleClose(id)}>
          <img src={close} alt="close" />
        </Close>
      </Container>
    )
  }
}

export default Card
