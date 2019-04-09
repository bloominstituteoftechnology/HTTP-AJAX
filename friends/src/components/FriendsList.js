import React from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Friend from "./Friend";

const StyledContainerDiv = styled.div`
  margin-left: 100px;
`;

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

function FriendsList(props) {
  // console.log(props.friends);
  // const deleteItem = ev => {
  //   console.log("Clicked!");
  //   axios
  //     .delete(`http://localhost:5000/friends/${props.id}`)
  //     .then(res => {
  //       props.updateFriends(res.data);
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <StyledDiv>
      {props.friends.map(friend => (
        <Friend
          friend={friend}
          updateFriends={props.updateFriends}
          key={friend.id}
        />
      ))}
    </StyledDiv>
  );
}

export default FriendsList;
