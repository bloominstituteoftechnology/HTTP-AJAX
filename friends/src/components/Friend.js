import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div`
  margin: 5px auto;
  max-width: 50%;
  background-color: blue;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
`;

const Friend = props => {
  return (
    <StyledFriend>
      <h2>{props.friend.name}</h2>
      <h3>{props.friend.age} years old</h3>
      <h3>{props.friend.email}</h3>
    </StyledFriend>
  );
};

export default Friend;
