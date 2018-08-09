import React from 'react';
import FriendDetail from './FriendDetail';
import styled from 'styled-components';

import { Container } from '../styles';

const SecondaryHeading = styled.h2`
  color: #00bcd4;
  font-weight: 300;
  text-align: center;
  font-size: 3.6rem;
  margin: 3rem 0;
  text-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FriendList = ({ friends, onUpdate, onDelete }) => (
  <Container>
    <SecondaryHeading>Your Friends</SecondaryHeading>
    <FlexContainer>
      {friends.map(friend => (
        <FriendDetail
          onDelete={onDelete.bind(null, friend.id)}
          onUpdate={onUpdate.bind(null, friend.id)}
          key={friend.id}
          friend={friend}
        />
      ))}
    </FlexContainer>
  </Container>
);

export default FriendList;
