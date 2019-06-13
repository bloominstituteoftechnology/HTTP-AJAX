import React from "react";

import styled from "styled-components";
import axios from "axios";
import { Route } from "react-router-dom";

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

function Friend(props) {
  //   console.log(props.friend.id);
  const deleteItem = ev => {
    console.log("Clicked!");
    axios
      .delete(`http://localhost:5000/friends/${props.friend.id}`)
      .then(res => {
        props.updateFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Route path="/friends/:id">
      <StyledDiv>
        <FlexDiv>
          <CloseP onClick={deleteItem}>x</CloseP>
          <StyledH2>
            {props.friend.name}, {props.friend.age}
          </StyledH2>
        </FlexDiv>
        <StyledP>{props.friend.email}</StyledP>
      </StyledDiv>
    </Route>
  );
}

export default Friend;
