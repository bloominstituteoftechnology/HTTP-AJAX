import React from 'react'
import Friend from './Friend'
import styled from 'styled-components'

const Fcards = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`

const FriendsList = props => {
    return (
        <Fcards>
            {props.friends.map(friend =>
                <Friend key={friend} friend={friend} />
            )}
        </Fcards>
    )
}

export default FriendsList;