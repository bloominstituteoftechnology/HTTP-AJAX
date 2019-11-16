import React from "react";
import Friend from "./Friend";
import styled from "styled-components";
import "bulma/css/bulma.css";
const FriendListSection = styled.section.attrs({
  className: "section"
})``;
const Container = styled.div.attrs({
  className: "container"
})`

display: flex;
flex-direction: column-reverse;
max-width: 600px;
`;
const FriendsList = props => {
  return (
    <FriendListSection>
      <Container>
          {props.friendsData.map(friend => {
            return (
                <Friend key={friend.id} id = {friend.id} name={friend.name} age = {friend.age} email = {friend.email} 
                showUpdateModalHandler = {props.showUpdateModalHandler}
                deleteFriendHandler = {props.deleteFriendHandler} />);
          })}
      </Container>
    </FriendListSection>
  );
};

export default FriendsList;
