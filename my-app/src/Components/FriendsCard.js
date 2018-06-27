import React from 'react'
import styled from 'styled-components'
import { CardTitle } from 'reactstrap'

const Card = styled.div`
  width: 300px;
  height: 400px;
  border 2px solid black;
  display:flex;
  justify-content: center;
  align-items:center;
`
const BodyCard = styled.div`
  color: palevioletred;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Button = styled.button`
  color: tomato;
  border-color: tomato;
`

const FriendsCard = (props) => {
  return (
    <div>
      {props.friends.map((friend) => {
        return (
          <Card>
            <BodyCard>
              <CardTitle>{friend.name}</CardTitle>
              <Button>{friend.email}</Button>
            </BodyCard>
          </Card>
        )
      })}
    </div>
  )
}

export default FriendsCard
