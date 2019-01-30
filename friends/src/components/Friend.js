import React from 'react'
import styled from 'styled-components'

const Fcard = styled.div`
  border: 1px solid red;
`
const Fname = styled.div`
  font-size: 1.2rem;
`

const Friend = props => {
    return (
        <Fcard>
            <Fname>
                {props.friend.name}
            </Fname>
        </Fcard>
    )
}
export default Friend;