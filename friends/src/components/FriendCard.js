import React from 'react';

import styled from 'styled-components';

const CardContainer = styled.div `
  
`

const FriendCard = props => {
  return (
    <CardContainer>
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </CardContainer>
  )
}

export default FriendCard;