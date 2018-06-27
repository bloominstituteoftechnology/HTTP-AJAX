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
`;
const FriendsList = props => {
  return (
    <FriendListSection>
      <Container>
          {props.friendsData.map(friend => {
            return (
                <Friend key={friend.id} name={friend.name} age = {friend.age} email = {friend.email} />);
          })}
      </Container>
    </FriendListSection>
  );
};

export default FriendsList;
