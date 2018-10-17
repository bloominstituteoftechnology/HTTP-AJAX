import React from 'react'
import { Container, Line } from '../styles/Card'

const Card = ({ name, age, email }) => (
  <Container>
    <Line>{name}</Line>
    <Line>{age}</Line>
    <Line>{email}</Line>
  </Container>
)

export default Card