import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled.p`
  margin: 0;
`;
function Friend(props) {
  return (
    <StyledDiv>
      <h2>
        {props.friend.name}, {props.friend.age}
      </h2>
      <StyledP>{props.friend.email}</StyledP>
    </StyledDiv>
  );
}

export default Friend;
