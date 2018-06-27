import React from 'react'
import styled from 'styled-components'
import { CardTitle } from 'reactstrap'

const Card = styled.div`
  width: 299px;
  height: 400px;
  border 2px solid black;
  display:inline-block;
`
const BodyCard = styled.div`
  color: palevioletred;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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
          <Card key={friend.id}>
            <BodyCard>
              <CardTitle>{friend.name}</CardTitle>
              <div>{friend.email}</div>
            </BodyCard>
          </Card>
        )
      })}
    </div>
  )
}

export default FriendsCard
