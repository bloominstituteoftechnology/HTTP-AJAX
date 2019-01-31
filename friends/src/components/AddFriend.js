import React from 'react'
import styled from 'styled-components'

const FriendBar = styled.div`
  display: flex;
  //align-items: center;
  border: 1px solid red;
  //padding: 10px;
`
const Finput = styled.input`
  margin: 5px;
`
const Fform = styled.form`
  display: flex;
  flex-direction: column;
  
`
const Fbutton = styled.div`
  border: 1px solid black;
  -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
  width: 150px;
  padding: 5px;
`

const AddFriend = props => {
    return (
        <FriendBar>
            <form>
                <Finput
                    type="text"
                    placeholder="Name"
                />
                <Finput
                    type="text"
                    placeholder="Age"
                />
                <Finput
                    type="text"
                    placeholder="eMail"
                />
                <Fbutton type="submit">New Friend</Fbutton>
            </form>
        </FriendBar>
    )
}

export default AddFriend;