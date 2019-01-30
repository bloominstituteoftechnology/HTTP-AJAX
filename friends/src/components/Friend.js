import React from 'react'
import styled from 'styled-components'

const Fcard = styled.div`
  border: 2px solid black;
  -webkit-border-radius: 10px;-moz-border-radius: 10px;border-radius: 10px;
  width: 300px;
  margin: 15px 0px;
`
const Fname = styled.div`
  font-size: 1.2rem;
`
const Fage = styled.div`
  font-size: 1.0rem;
`
const Femail = styled.div`
  font-size: 1.0rem;
  font-weight: bold;
`

const Friend = props => {
    return (
        <Fcard>
            <Fname>
                {props.friend.name}
            </Fname>
            <Fage>
                {props.friend.age}
            </Fage>
            <Femail>
                {props.friend.email}
            </Femail>
        </Fcard>
    )
}
export default Friend;