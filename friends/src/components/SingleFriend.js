import React from "react";
import styled from "styled-components";

const SingleFriendContainer = styled.div`
  border: 1px solid #efefef;
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 4rem;

  > p {
    margin-bottom: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  > button {
    padding: 1.2rem;
    width: 40%;
  }
`

const SingleFriend = props => {
  const id = props.match.params.id;
  const friend = props.friends.find(friend => `${friend.id}` === id);

  if (!friend) {
    return <h1>Loading friends...</h1>;
  }
  return (
    <SingleFriendContainer>
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <ButtonContainer>
        <button onClick={event => props.deleteFriend(event, id)}>
          Delete Friend
        </button>
        <button onClick={event => props.setUpdateForm(event, friend)}>Update Friend</button>
      </ButtonContainer>
    </SingleFriendContainer>
  );
};

export default SingleFriend;
