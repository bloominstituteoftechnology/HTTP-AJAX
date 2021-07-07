import React from "react";
import styled from "styled-components";

const FriendContainer = styled.div`
  border: 1px solid #efefef;
  width: 50%;
  max-width: 40rem;
  margin-top: 1rem;
  padding: 2rem 4rem;
`


const Friend = props => {
  const { name, age, email } = props.friend
  // if (!props.friend) {
  //   return <h2>Loading..</h2>
  // }
  return (
    <FriendContainer>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </FriendContainer>
  )
}

export default Friend;