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
            <form onSubmit={props.addFriend}>
                <Finput
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={props.friends.name}
                    onChange={props.handleChange}
                />
                <Finput
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={props.friends.age}
                    onChange={props.handleChange}
                />
                <Finput
                    type="text"
                    placeholder="eMail"
                    name="email"
                    value={props.friends.email}
                    onChange={props.handleChange}
                />
                <Fbutton type="submit">New Friend</Fbutton>
            </form>
        </FriendBar>
    )
}

export default AddFriend;