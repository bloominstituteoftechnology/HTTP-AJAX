import React from 'react';
import styled from 'styled-components';

const StyledFriendForm = styled.form`
  max-width: 60%;
  border: 1px solid black;
  border-radius: 4px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  input {
    padding: 5px;
  }
`;

const FriendForm = () => {
  return (
    <StyledFriendForm>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="age" />
      <input type="text" placeholder="email" />
    </StyledFriendForm>
  );
};

export default FriendForm;
