import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFriend = styled.div`
  box-shadow: 0 0 1rem rgba(0,0,0,.5);
  margin: .5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: rgb(161, 21, 29);
  color: white;
  position: relative;
`

const StyledName = styled.h2`
  font-size: 2rem;
  border-radius: 5px;
  padding: 1rem 2rem;
  background: rgb(0, 49, 116);
  margin-bottom: 0;
`

const StyledAge = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 4px;
  background: rgba(0,0,0, .3);
  padding: .5rem;
  margin: 0;
`

const StyledEmail = styled.p`
  margin: 0;
  padding: .5rem;
`

const StyledButton = styled.button`
  padding: .75rem 1.5rem;
  background: rgb(161, 21, 29);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0, .5);
  border-radius: .4rem;
  margin: .5rem;
  transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(-4px);
  }

  &:active {
    transform: translateY(-2px);
  }
`

export default ({ friend, deleteFriend }) => (
  <StyledFriend>
    <StyledName>{friend.name}</StyledName>
    <StyledAge>{friend.age} years</StyledAge>
    <StyledEmail>{friend.email}</StyledEmail>
    <StyledButton onClick={() => deleteFriend(friend.id)}>Delete</StyledButton>
    <Link to={`/friends/${friend.id}`}>
      <StyledButton>Update</StyledButton> 
    </Link>

  </StyledFriend>
);
