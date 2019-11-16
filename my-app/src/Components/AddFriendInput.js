import React from 'react'
import styled from 'styled-components'

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
`
const AddFriendInput = (props) => {
  return (
    <InputDiv>
      <form onSubmit={props.handleSubmit}>
        <input
          placeholder='add new friend card'
          onChange={props.handleChange}
          value={props.value}
        />
      </form>
    </InputDiv>
  )
}
export default AddFriendInput
