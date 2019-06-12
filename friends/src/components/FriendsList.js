import React from 'react';
import uuidv1 from 'uuid/v1';
import styled from 'styled-components';
import Friend from './Friend';

const StyledFriendsList = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`

export default ({ friends, isLoading }) => (
    <>
    <h1>My Favorite Friends</h1>
    {isLoading && (<p>...Loading</p>)}  
    <StyledFriendsList>
      {friends.map(friend => <Friend key={uuidv1()} friend={friend} />)}
    </StyledFriendsList>
    </>
  );
