import React from "react";

import Friend from "./Friend";

import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 100px;
`;

function FriendsList(props) {
  return (
    <StyledDiv>
      {props.friends.map(friend => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </StyledDiv>
  );
}

export default FriendsList;
