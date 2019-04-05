import React from "react";

import styled from "styled-components";
import axios from "axios";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled.p`
  margin: 0;
`;

const CloseP = styled.p`
  font-size: 12px;
`;
const FlexDiv = styled.div`
  width: 100%;
  display: flex;
`;
const StyledH2 = styled.h2`
  margin-left: 44px;
`;

const deleteItem = ev => {
  axios.delete("http://localhost:5000/friends");
};

function Friend(props) {
  return (
    <StyledDiv>
      <FlexDiv>
        <CloseP>x</CloseP>
        <StyledH2>
          {props.friend.name}, {props.friend.age}
        </StyledH2>
      </FlexDiv>
      <StyledP>{props.friend.email}</StyledP>
    </StyledDiv>
  );
}

export default Friend;
